import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { siteConfig } from "@/data/site";
import { useSEO } from "@/lib/seo";

const LegalDataDeletion = () => {
  useSEO({
    title: "Eliminación de datos de usuario",
    description: `Instrucciones para solicitar la eliminación de datos de usuario en las aplicaciones y sitios web de ${siteConfig.name}.`,
    path: "/eliminacion-de-datos",
  });

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Eliminación de Datos del Usuario</h1>
          <p className="text-brand-slate text-lg mb-10 leading-relaxed">
            De acuerdo con las regulaciones de privacidad y los requisitos de plataformas de terceros, los usuarios tienen el derecho a solicitar que se eliminen sus datos personales de las bases de datos y aplicaciones utilizadas por {siteConfig.name} operado por {siteConfig.legalName}.
          </p>

          <div className="space-y-8 text-white/80 leading-8">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">1. ¿Qué datos se eliminan?</h2>
              <p>Al procesar tu solicitud, eliminaremos o de-identificaremos la información personal asociada a ti u otras interacciones directas (por ejemplo: nombre, correo, teléfono, registros en bases de datos comerciales de nuestra propiedad), exceptuando aquella información que debamos retener por cumplimiento de obligaciones legales o fiscales, o por ejercer defensa de derechos.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">2. Instrucciones para la eliminación</h2>
              <p>Para solicitar formalmente la eliminación de tus datos, debes seguir estos pasos:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Envía un correo electrónico a <strong><a className="text-brand-secondary hover:underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></strong>.</li>
                <li><strong>Asunto sugerido:</strong> Solicitud de Eliminación de Datos.</li>
                <li><strong>Cuerpo del correo:</strong> Indica claramente el correo o número de teléfono que deseas eliminar de los registros, y especifica si la solicitud involucra alguna aplicación conectada específica o si se trata del registro general comercial.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">3. Plazos de resolución</h2>
              <p>Luego de recibir tu solicitud de eliminación, te confirmaremos recepción y procederemos a la eliminación en un plazo máximo de cinco (5) a siete (7) días hábiles de la confirmación de tu identidad, si correspondiese. En caso de requerir información adicional del usuario, dicho plazo podrá extenderse proporcionalmente.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">4. Servicios y APPs deTerceros</h2>
              <p>Si la eliminación corresponde a datos entregados mediante APPs de redes sociales o formularios conectados vía API, la eliminación recaerá únicamente sobre nuestras bases de datos internas. Los usuarios deberán también revisar y gestionar los permisos en las plataformas de origen en las que puedan haber consentido el acceso a su información de forma centralizada.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalDataDeletion;
