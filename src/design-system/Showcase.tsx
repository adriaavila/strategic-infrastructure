/**
 * Design System Showcase
 * 
 * Componente de demostración que muestra todos los elementos
 * del design system en acción.
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const DesignSystemShowcase = () => {
  return (
    <div className="min-h-screen bg-background p-section">
      <div className="container-custom max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-5xl">
          <h1 className="text-heading text-6xl mb-lg">Design System</h1>
          <p className="text-body text-xl text-muted max-w-2xl mx-auto">
            Sistema de diseño arquitectónico y minimalista para mantener consistencia visual
          </p>
        </div>

        {/* Colors Section */}
        <section className="mb-5xl">
          <h2 className="text-heading text-3xl mb-xl">Colores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
            <div className="card-surface">
              <div className="w-full h-24 bg-primary rounded-lg mb-md"></div>
              <h3 className="text-heading text-sm mb-xs">Primary</h3>
              <p className="text-body text-xs text-muted">hsl(0, 0%, 8%)</p>
            </div>
            
            <div className="card-surface">
              <div className="w-full h-24 bg-secondary rounded-lg mb-md"></div>
              <h3 className="text-heading text-sm mb-xs">Secondary</h3>
              <p className="text-body text-xs text-muted">hsl(0, 0%, 96%)</p>
            </div>
            
            <div className="card-surface">
              <div className="w-full h-24 bg-destructive rounded-lg mb-md"></div>
              <h3 className="text-heading text-sm mb-xs">Destructive</h3>
              <p className="text-body text-xs text-muted">hsl(0, 84%, 60%)</p>
            </div>
            
            <div className="card-surface">
              <div className="w-full h-24 bg-success rounded-lg mb-md"></div>
              <h3 className="text-heading text-sm mb-xs">Success</h3>
              <p className="text-body text-xs text-muted">hsl(142, 71%, 45%)</p>
            </div>
          </div>

          {/* Border Variants */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
            <div className="card-surface border border-subtle">
              <h3 className="text-heading text-sm mb-xs">Border Subtle</h3>
              <p className="text-body text-xs text-muted">8% opacity</p>
            </div>
            
            <div className="card-surface border border-medium">
              <h3 className="text-heading text-sm mb-xs">Border Medium</h3>
              <p className="text-body text-xs text-muted">12% opacity</p>
            </div>
            
            <div className="card-surface border border-strong">
              <h3 className="text-heading text-sm mb-xs">Border Strong</h3>
              <p className="text-body text-xs text-muted">20% opacity</p>
            </div>
            
            <div className="card-surface border-architectural">
              <h3 className="text-heading text-sm mb-xs">Architectural</h3>
              <p className="text-body text-xs text-muted">Default border</p>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-5xl">
          <h2 className="text-heading text-3xl mb-xl">Tipografía</h2>
          
          <div className="space-y-lg">
            <div>
              <h1 className="text-heading text-7xl mb-sm">Heading 1</h1>
              <p className="text-body text-sm text-muted">text-7xl • 72px • font-medium</p>
            </div>
            
            <div>
              <h2 className="text-heading text-5xl mb-sm">Heading 2</h2>
              <p className="text-body text-sm text-muted">text-5xl • 48px • font-medium</p>
            </div>
            
            <div>
              <h3 className="text-heading text-3xl mb-sm">Heading 3</h3>
              <p className="text-body text-sm text-muted">text-3xl • 30px • font-medium</p>
            </div>
            
            <div>
              <p className="text-body text-lg mb-sm">
                Body text large. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-body text-sm text-muted">text-lg • 18px • line-height 1.6</p>
            </div>
            
            <div>
              <p className="text-body text-base mb-sm">
                Body text regular. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-body text-sm text-muted">text-base • 16px • line-height 1.6</p>
            </div>
            
            <div>
              <p className="text-body text-sm text-muted mb-sm">
                Muted text. Used for secondary information and descriptions.
              </p>
              <p className="text-body text-xs text-muted">text-sm • 14px • muted color</p>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="mb-5xl">
          <h2 className="text-heading text-3xl mb-xl">Espaciado</h2>
          
          <div className="space-y-md">
            <div className="flex items-center gap-md">
              <div className="w-xs h-xs bg-primary rounded"></div>
              <span className="text-body">xs: 4px</span>
            </div>
            
            <div className="flex items-center gap-md">
              <div className="w-sm h-sm bg-primary rounded"></div>
              <span className="text-body">sm: 8px</span>
            </div>
            
            <div className="flex items-center gap-md">
              <div className="w-md h-md bg-primary rounded"></div>
              <span className="text-body">md: 16px</span>
            </div>
            
            <div className="flex items-center gap-md">
              <div className="w-lg h-lg bg-primary rounded"></div>
              <span className="text-body">lg: 24px</span>
            </div>
            
            <div className="flex items-center gap-md">
              <div className="w-xl h-xl bg-primary rounded"></div>
              <span className="text-body">xl: 32px</span>
            </div>
            
            <div className="flex items-center gap-md">
              <div className="w-2xl h-2xl bg-primary rounded"></div>
              <span className="text-body">2xl: 48px</span>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-5xl">
          <h2 className="text-heading text-3xl mb-xl">Botones</h2>
          
          <div className="flex flex-wrap gap-md">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="hero">Hero</Button>
            <Button variant="hero-outline">Hero Outline</Button>
          </div>
          
          <div className="flex flex-wrap gap-md mt-md">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-5xl">
          <h2 className="text-heading text-3xl mb-xl">Tarjetas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            <div className="card-surface">
              <h3 className="text-heading text-xl mb-sm">Card Surface</h3>
              <p className="text-body text-sm text-muted">
                Tarjeta con estilos predefinidos del design system
              </p>
            </div>
            
            <div className="card-surface card-glow">
              <h3 className="text-heading text-xl mb-sm">Card Glow</h3>
              <p className="text-body text-sm text-muted">
                Tarjeta con efecto glow que sigue el mouse
              </p>
            </div>
            
            <Card className="p-lg">
              <h3 className="text-heading text-xl mb-sm">Shadcn Card</h3>
              <p className="text-body text-sm text-muted">
                Componente Card de shadcn/ui con estilos del design system
              </p>
            </Card>
          </div>
        </section>

        {/* Shadows Section */}
        <section className="mb-5xl">
          <h2 className="text-heading text-3xl mb-xl">Sombras</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-md">
            <div className="card-surface shadow-xs p-lg text-center">
              <p className="text-body text-xs">xs</p>
            </div>
            <div className="card-surface shadow-sm p-lg text-center">
              <p className="text-body text-xs">sm</p>
            </div>
            <div className="card-surface shadow-md p-lg text-center">
              <p className="text-body text-xs">md</p>
            </div>
            <div className="card-surface shadow-lg p-lg text-center">
              <p className="text-body text-xs">lg</p>
            </div>
            <div className="card-surface shadow-xl p-lg text-center">
              <p className="text-body text-xs">xl</p>
            </div>
            <div className="card-surface shadow-glow p-lg text-center">
              <p className="text-body text-xs">glow</p>
            </div>
          </div>
        </section>

        {/* Border Radius Section */}
        <section className="mb-5xl">
          <h2 className="text-heading text-3xl mb-xl">Border Radius</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-md">
            <div className="bg-primary rounded-none p-lg text-center">
              <p className="text-primary-foreground text-xs">none</p>
            </div>
            <div className="bg-primary rounded-sm p-lg text-center">
              <p className="text-primary-foreground text-xs">sm</p>
            </div>
            <div className="bg-primary rounded-md p-lg text-center">
              <p className="text-primary-foreground text-xs">md</p>
            </div>
            <div className="bg-primary rounded-lg p-lg text-center">
              <p className="text-primary-foreground text-xs">lg</p>
            </div>
            <div className="bg-primary rounded-xl p-lg text-center">
              <p className="text-primary-foreground text-xs">xl</p>
            </div>
            <div className="bg-primary rounded-full p-lg text-center">
              <p className="text-primary-foreground text-xs">full</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
