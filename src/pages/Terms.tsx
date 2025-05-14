
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Separator } from '@/components/ui/separator';

const Terms = () => {
  return (
    <PageLayout>
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Termos e Condições de Uso – Balcão do Carro</h1>
          <p className="text-center text-gray-600 mt-2">Última atualização: Maio de 2025</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Bem-vindo ao Balcão do Carro! Estes Termos e Condições de Uso regulam o uso da nossa plataforma (site, aplicativo e demais canais), 
              que facilita a conexão entre vendedores e compradores de veículos. Ao utilizar nossos serviços, você concorda com todas as disposições abaixo.
            </p>
            
            <Separator className="my-6" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-600 mb-4">
                Você declara ter 18 (dezoito) anos completos ou mais, bem como que leu, compreendeu e aceitou os presentes Termos de Uso.
              </p>
              <p className="text-gray-600">
                Os Termos podem ser modificados a qualquer momento, por razões legais, técnicas ou comerciais. 
                O uso contínuo da plataforma após alterações constitui aceitação automática dos novos termos.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Cadastro e Acesso</h2>
              <p className="text-gray-600 mb-4">
                Para acessar áreas restritas e publicar anúncios, é necessário realizar um cadastro, fornecendo informações completas e verdadeiras. 
                O usuário é responsável por manter a confidencialidade de seu login e senha, sendo responsável por qualquer atividade realizada com sua conta.
              </p>
              <p className="text-gray-600">
                A inserção de dados falsos poderá levar à suspensão ou exclusão da conta, sem aviso prévio.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Regras para Anúncios</h2>
              <p className="text-gray-600 mb-4">
                Ao publicar um anúncio, o usuário declara:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Ser o legítimo proprietário do veículo ou estar autorizado a negociá-lo;</li>
                <li>Informar dados verídicos e atualizados sobre o veículo;</li>
                <li>Utilizar fotos reais, que representem com fidelidade o bem anunciado;</li>
                <li>Não publicar conteúdo ofensivo, ilegal ou que viole direitos de terceiros.</li>
              </ul>
              <p className="text-gray-600">
                O Balcão do Carro poderá, a seu critério, editar ou remover anúncios que violem estas condições.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Uso Adequado da Plataforma</h2>
              <p className="text-gray-600 mb-4">
                O usuário compromete-se a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Não praticar atos ilícitos;</li>
                <li>Não violar direitos de terceiros;</li>
                <li>Não utilizar a plataforma para transmitir vírus ou códigos maliciosos;</li>
                <li>Não utilizar ferramentas de raspagem (crawler/scraping);</li>
                <li>Respeitar os limites técnicos e comerciais do serviço.</li>
              </ul>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Responsabilidades e Isenções</h2>
              <p className="text-gray-600 mb-4">
                O Balcão do Carro atua apenas como intermediador de anúncios e não garante:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>A veracidade das informações fornecidas pelos usuários;</li>
                <li>A qualidade, segurança ou legalidade dos veículos anunciados;</li>
                <li>A concretização de qualquer negociação.</li>
              </ul>
              <p className="text-gray-600 mb-4">
                O usuário é exclusivamente responsável por:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Suas ações na plataforma;</li>
                <li>O conteúdo publicado;</li>
                <li>Danos causados a terceiros;</li>
                <li>Sua conexão com a internet e segurança de seus dispositivos.</li>
              </ul>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Propriedade Intelectual</h2>
              <p className="text-gray-600 mb-4">
                Todo o conteúdo do Balcão do Carro (textos, imagens, marcas, códigos e dados) pertence à empresa ou é licenciado por terceiros. 
                É vedada a reprodução, distribuição ou uso comercial sem autorização expressa.
              </p>
              <p className="text-gray-600">
                A coleta automática de dados por softwares ou bots é proibida.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Proteção de Dados Pessoais</h2>
              <p className="text-gray-600 mb-4">
                O Balcão do Carro respeita a Lei Geral de Proteção de Dados (LGPD). Os dados coletados são usados para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Identificar e autenticar usuários;</li>
                <li>Viabilizar contato entre compradores e vendedores;</li>
                <li>Prevenir fraudes;</li>
                <li>Melhorar os serviços e oferecer produtos de interesse.</li>
              </ul>
              <p className="text-gray-600">
                O usuário pode solicitar acesso, correção ou exclusão de seus dados por meio de nossos canais de atendimento.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Cookies</h2>
              <p className="text-gray-600">
                Utilizamos cookies para melhorar a experiência do usuário, lembrar preferências e gerar estatísticas de uso. 
                Você pode desativar os cookies nas configurações do seu navegador, mas isso poderá afetar o funcionamento do site.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Encerramento de Conta</h2>
              <p className="text-gray-600">
                O Balcão do Carro pode suspender ou cancelar o acesso de usuários que violem estes termos ou utilizem a plataforma de forma indevida.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-2xl font-bold mb-4">10. Legislação e Foro</h2>
              <p className="text-gray-600 mb-6">
                Este contrato é regido pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de Belo Horizonte/MG 
                para dirimir quaisquer dúvidas ou controvérsias.
              </p>
              
              <p className="text-gray-600 mt-8">
                Para dúvidas, sugestões ou reclamações, entre em contato com nossa Central de Atendimento.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Terms;
