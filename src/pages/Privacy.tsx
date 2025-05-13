
import React from 'react';
import PageLayout from '@/components/PageLayout';

const Privacy = () => {
  return (
    <PageLayout>
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Política de Privacidade</h1>
          <p className="text-center text-gray-600 mt-2">Última atualização: 13 de Maio de 2025</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
            <p className="text-gray-600">
              A SemAtravessador está comprometida em proteger sua privacidade. Esta Política de Privacidade 
              explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você 
              utiliza nossa plataforma, seja através do site ou do aplicativo móvel.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Informações que Coletamos</h2>
            <p className="text-gray-600 mb-4">
              <strong>2.1 Informações que você nos fornece:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Dados de cadastro: nome, endereço, email, telefone, CPF/CNPJ</li>
              <li>Informações sobre veículos: marca, modelo, ano, quilometragem, documentação</li>
              <li>Fotografias e vídeos dos veículos anunciados</li>
              <li>Informações de pagamento para processamento de taxas de serviço</li>
              <li>Comunicações que você troca com outros usuários ou com nossa equipe</li>
            </ul>
            
            <p className="text-gray-600 mb-4">
              <strong>2.2 Informações coletadas automaticamente:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Dados de uso: como você navega e interage com nossa plataforma</li>
              <li>Informações do dispositivo: tipo de dispositivo, sistema operacional, navegador</li>
              <li>Dados de localização, quando permitido pelo seu dispositivo</li>
              <li>Endereço IP e dados de conexão</li>
              <li>Cookies e tecnologias semelhantes</li>
            </ul>
            
            <p className="text-gray-600 mb-4">
              <strong>2.3 Informações de terceiros:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Dados de verificação de identidade de prestadores de serviços</li>
              <li>Informações disponíveis publicamente sobre veículos</li>
              <li>Feedback e avaliações de outros usuários</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Como Usamos Suas Informações</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Criar e gerenciar sua conta na plataforma</li>
              <li>Facilitar a conexão entre compradores e vendedores</li>
              <li>Processar anúncios de veículos e gerenciar ofertas</li>
              <li>Verificar identidades e prevenir fraudes</li>
              <li>Fornecer suporte ao cliente e resolver disputas</li>
              <li>Personalizar sua experiência na plataforma</li>
              <li>Enviar notificações sobre atividades relevantes (novas ofertas, mensagens)</li>
              <li>Comunicar atualizações de serviço, novos recursos ou promoções</li>
              <li>Melhorar nossos produtos e serviços</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Compartilhamento de Informações</h2>
            <p className="text-gray-600 mb-4">
              Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Outros usuários:</strong> Quando você anuncia um veículo ou faz uma oferta, compartilhamos informações necessárias para facilitar a negociação</li>
              <li><strong>Prestadores de serviços:</strong> Empresas que nos auxiliam em funções como pagamentos, verificação de identidade, hospedagem de dados</li>
              <li><strong>Parceiros de negócios:</strong> Empresas com as quais trabalhamos para oferecer serviços complementares, como seguradoras ou financeiras</li>
              <li><strong>Autoridades legais:</strong> Em resposta a solicitações legais, ordens judiciais ou processos legais</li>
              <li><strong>Proteção de direitos:</strong> Quando necessário para proteger nossos direitos, propriedade ou segurança, bem como os de nossos usuários</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Segurança das Informações</h2>
            <p className="text-gray-600 mb-4">
              Implementamos medidas técnicas, administrativas e físicas projetadas para proteger suas informações 
              pessoais contra acesso não autorizado, perda ou alteração. Estas medidas incluem:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Criptografia de dados sensíveis</li>
              <li>Acesso restrito às informações pessoais</li>
              <li>Monitoramento regular de sistemas para detecção de vulnerabilidades</li>
              <li>Treinamento de segurança para nossa equipe</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Apesar de nossos esforços, nenhum sistema de segurança é completamente impenetrável. 
              Não podemos garantir a segurança absoluta de suas informações.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Seus Direitos e Escolhas</h2>
            <p className="text-gray-600 mb-4">
              Você tem direitos sobre suas informações pessoais, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Acesso:</strong> Solicitar acesso aos dados pessoais que mantemos sobre você</li>
              <li><strong>Correção:</strong> Atualizar ou corrigir informações imprecisas</li>
              <li><strong>Exclusão:</strong> Solicitar a exclusão de suas informações pessoais</li>
              <li><strong>Restrição:</strong> Limitar o processamento de seus dados em determinadas circunstâncias</li>
              <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado para transferência</li>
              <li><strong>Oposição:</strong> Opor-se ao processamento de suas informações em certas situações</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Para exercer qualquer um destes direitos, entre em contato conosco através do email 
              privacidade@sematravessador.com.br ou pela seção "Minha Conta" na plataforma.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Retenção de Dados</h2>
            <p className="text-gray-600">
              Mantemos suas informações pessoais pelo tempo necessário para cumprir os objetivos descritos 
              nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido por 
              lei. Os critérios usados para determinar nossos períodos de retenção incluem o tempo que você 
              mantém uma conta ativa, obrigações legais e requisitos operacionais essenciais.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Cookies e Tecnologias Semelhantes</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos cookies e tecnologias semelhantes para coletar informações sobre como você interage 
              com nossa plataforma. Estes ajudam a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Manter sua sessão ativa enquanto usa nossa plataforma</li>
              <li>Lembrar suas preferências e configurações</li>
              <li>Entender como você navega pelo site para melhorar a experiência</li>
              <li>Personalizar conteúdo e anúncios relevantes</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Você pode gerenciar as configurações de cookies através do seu navegador, incluindo a recusa 
              de certos cookies. No entanto, isso pode afetar sua experiência na plataforma.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Alterações a Esta Política</h2>
            <p className="text-gray-600">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre 
              alterações significativas através de um aviso em nossa plataforma ou por email. Encorajamos 
              você a revisar esta política regularmente para se manter informado sobre como protegemos suas informações.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contato</h2>
            <p className="text-gray-600">
              Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre nossas 
              práticas de privacidade, entre em contato conosco em:
            </p>
            <p className="text-gray-600 mt-4">
              Email: privacidade@sematravessador.com.br<br />
              Endereço: Av. Paulista, 1000, São Paulo - SP<br />
              Telefone: (11) 5555-5555
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default Privacy;
