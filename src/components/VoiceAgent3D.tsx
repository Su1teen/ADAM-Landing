import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { Conversation } from '@elevenlabs/client';

const VoiceAgent3D = () => {
  const [isListening, setIsListening] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [conversationStatus, setConversationStatus] = useState('ready'); // ready, connecting, active, error
  const [agentMode, setAgentMode] = useState('listening'); // listening, speaking
  const conversationRef = useRef<any>(null);

  const AGENT_ID = import.meta.env.VITE_AGENT_ID;
  const XI_API_KEY = import.meta.env.VITE_XI_API_KEY;

  // Get signed URL for authentication
  const getSignedUrl = async (): Promise<string> => {
    try {
      const response = await fetch(
        `https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${AGENT_ID}`,
        {
          headers: {
            'xi-api-key': XI_API_KEY,
          },
        }
      );
      
      if (!response.ok) {
        throw new Error(`Failed to get signed URL: ${response.statusText}`);
      }
      
      const data = await response.json();
      return data.signed_url;
    } catch (error) {
      console.error('Error getting signed URL:', error);
      throw error;
    }
  };

  // Start conversation using ElevenLabs SDK
  const startListening = async () => {
    try {
      setConversationStatus('connecting');
      
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Get signed URL for authentication
      const signedUrl = await getSignedUrl();
      
      // Start the conversation using ElevenLabs SDK
      const conversation = await Conversation.startSession({
        signedUrl: signedUrl,
        onConnect: () => {
          console.log('Connected to ElevenLabs Voice Agent');
          setIsConnected(true);
          setIsListening(true);
          setConversationStatus('active');
        },
        onDisconnect: () => {
          console.log('Disconnected from Voice Agent');
          setIsConnected(false);
          setIsListening(false);
          setConversationStatus('ready');
        },
        onError: (error) => {
          console.error('Voice Agent error:', error);
          setConversationStatus('error');
          setIsListening(false);
        },
        onModeChange: (mode) => {
          console.log('Agent mode changed:', mode.mode);
          setAgentMode(mode.mode);
        },
        onMessage: (message) => {
          console.log('Agent message:', message);
        }
      });
      
      conversationRef.current = conversation;
      
    } catch (error) {
      console.error('Failed to start conversation:', error);
      setConversationStatus('error');
      setIsListening(false);
    }
  };

  // Stop conversation
  const stopListening = async () => {
    try {
      if (conversationRef.current) {
        await conversationRef.current.endSession();
        conversationRef.current = null;
      }
      setIsListening(false);
      setIsConnected(false);
      setConversationStatus('ready');
      setAgentMode('listening');
    } catch (error) {
      console.error('Error stopping conversation:', error);
    }
  };

  // Toggle mute (if supported by the SDK)
  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Note: Mute functionality may need to be implemented based on SDK capabilities
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (conversationRef.current) {
        conversationRef.current.endSession();
      }
    };
  }, []);

  const getStatusColor = () => {
    switch (conversationStatus) {
      case 'ready': return 'text-accent-blue';
      case 'connecting': return 'text-yellow-500';
      case 'active': return 'text-green-500';
      case 'error': return 'text-red-500';
      default: return 'text-foreground-muted';
    }
  };

  const getStatusText = () => {
    switch (conversationStatus) {
      case 'ready': return 'Готов к общению';
      case 'connecting': return 'Подключение...';
      case 'active': return agentMode === 'speaking' ? 'Говорит...' : 'Слушает...';
      case 'error': return 'Ошибка подключения';
      default: return '';
    }
  };

  return (
    <section className="py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8">
            Поговорите с <span className="text-gradient">АДАМ</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto">
            Испытайте интеллектуальное общение с ИИ-ассистентом нового поколения
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center space-y-12">
          
          {/* 3D Spline Viewer - Interactive Microphone */}
          <div className="w-full max-w-4xl">
            <div 
              className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] rounded-3xl overflow-hidden glass-strong border border-glass-border/20 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              onClick={isListening ? stopListening : startListening}
              style={{
                filter: isListening ? 'brightness(1.2) saturate(1.3)' : 'brightness(1)',
                boxShadow: isListening ? '0 0 50px rgba(59, 130, 246, 0.5)' : 'none'
              }}
            >
              <spline-viewer 
                url="https://prod.spline.design/2DQ7q6F6eF8nAlzd/scene.splinecode"
                className="w-full h-full"
                style={{ background: 'transparent' }}
              />
              
              {/* Voice Agent Status Overlay */}
              <div className="absolute top-6 left-6 glass rounded-2xl p-4 border border-glass-border/30 pointer-events-none">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    conversationStatus === 'active' ? 'bg-green-500 animate-pulse' :
                    conversationStatus === 'connecting' ? 'bg-yellow-500 animate-pulse' :
                    conversationStatus === 'error' ? 'bg-red-500' :
                    'bg-accent-blue'
                  }`} />
                  <span className={`text-sm font-medium ${getStatusColor()}`}>
                    АДАМ {getStatusText()}
                  </span>
                </div>
              </div>

              {/* Click Instruction Overlay */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 glass rounded-2xl p-4 border border-glass-border/30 pointer-events-none">
                <div className="flex items-center gap-3">
                  {isListening ? (
                    <MicOff className="w-5 h-5 text-red-400" />
                  ) : (
                    <Mic className="w-5 h-5 text-accent-blue" />
                  )}
                  <span className="text-sm text-foreground">
                    {isListening ? 'Нажмите, чтобы остановить' : 'Нажмите, чтобы говорить'}
                  </span>
                </div>
              </div>

              {/* Listening Animation Ring */}
              {isListening && (
                <div className="absolute inset-0 rounded-3xl border-4 border-accent-blue animate-pulse opacity-50" />
              )}
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex flex-col items-center space-y-6">
            
            {/* Mute Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleMute}
                className="w-12 h-12 rounded-full glass-strong border border-glass-border/30 flex items-center justify-center hover:bg-primary/10 transition-all duration-300"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-foreground" />
                ) : (
                  <Volume2 className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>

            {/* Instructions */}
            <div className="text-center max-w-2xl">
              <p className="text-foreground-muted mb-2">
                {isListening 
                  ? 'Говорите с АДАМ. Нажмите на 3D-модель еще раз, чтобы остановить.'
                  : 'Нажмите на 3D-модель, чтобы начать разговор с ИИ-ассистентом'
                }
              </p>
              <p className="text-sm text-foreground-muted/70">
                Естественное общение с искусственным интеллектом
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAgent3D;