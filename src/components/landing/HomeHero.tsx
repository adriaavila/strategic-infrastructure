import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

export const HomeHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  const copy = {
    title: 'Convertimos mensajes en clientes',
    scrollToExpand: 'Scrollea hacia abajo',
    subtitle: 'Cotización, reserva y seguimiento automático para negocios que venden por Instagram y WhatsApp.'
  };

  return (
    <div className='bg-[#161618] w-full overflow-hidden'>
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1"
        posterSrc="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1920&auto=format&fit=crop"
        bgImageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop"
        title={copy.title}
        scrollToExpand={copy.scrollToExpand}
        textBlend={false}
      >
        <div className='max-w-4xl mx-auto text-center mt-8 pb-16'>
          <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black dark:text-white'>
            {copy.subtitle}
          </h2>
        </div>
      </ScrollExpandMedia>
    </div>
  );
};
