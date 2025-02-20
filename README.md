# AtividadeArquiteturaDeSoftware

1. Descrição do Projeto
   O objetivo do projeto é conectar pessoas com interesses em comum a partir de um aplicativo móvel que permite organizar, ingressar e editar eventos, tanto em bares quanto restaurantes.
   
3. Requisitos
   Funcionais:
   - Criação de perfil de usuário
   - Criação de perfil de estabelecimento
   - Criar e ingressar em eventos
   - Convidar/Remover pessoas para o evento
   - Envio de mensagens aos integrantes do evento
   - Adicionar e remover amigos
   - Recomendações personalizadas de estabelecimentos e pessoas
   - Confirmação de presença
   - Avaliação de pessoas e estabelecimentos
   - TALVEZ: - Criação de eventos pelo proprio estabelecimento
  
   Não-funcionais:
   - Confirmar presença até no máximo 1 hora antes do evento
   - Limite de 500 caracteres para descrição pessoal
   - Editar características do evento até no máximo 2 horas antes do evento.
   - Criptografia de senhas
   - Disponibilidade 24 horas por dia
   - Mínimo de 2 e máximo de 8 pessoas por evento

  4. Restrições e Condições
      - Restrições técnicas: ReactNative, nestJS, MySQL, Firebase.
      - Restrições não técnicas:
           - Orçamento: A definir
           - Prazo de entrega: A definir
           - Requisitos legais e regulatórios: Leitura facial

  5. Necessidades dos Stakeholders
      - Acessibilidade
      - Segurança para usuários e bares
      - Bares e restaurantes podem exigir algumas coisas...
             
  6. Tendências tecnológicas
      - ReactNative
      - Inteligência artificial

  7. Riscos de projeto
      - Arquitetura MVC pode não ser ideal
      - React native pode ser lento demais para o app
      - Banco relacional pode ser melhor que um não relacional
    
   8. Organização dos Componentes do Projeto

      src/
      │── events/                   
      │   ├── dto/                    
      │   │   ├── create-event.dto.ts  
      │   │   ├── update-event.dto.ts  
      │   ├── entities/                 
      │   │   ├── event.entity.ts      
      │   ├── events.controller.ts     
      │   ├── events.service.ts         
      │   ├── events.module.ts         
      │   ├── events.repository.ts      
      │── app.module.ts                
      │── main.ts                       

📂 DTOs (events/dto/)
Os DTOs ajudam a validar e definir a estrutura dos dados que são enviados e recebidos.

- create-event.dto.ts
Define os campos necessários para criar um evento, como nome, descrição, local, horário e participantes.

- update-event.dto.ts
DTO para atualização de eventos, permitindo modificar apenas alguns campos.

📂 Entidades (events/entities/)
A entidade representa a estrutura do evento no banco de dados.

- event.entity.ts
Define a estrutura de armazenamento do evento no banco relacional (MySQL).

📂 Controlador (events.controller.ts)
O controlador gerencia as requisições HTTP para eventos.

events.controller.ts
Define as rotas para criar e gerenciar eventos.

📂 Serviço (events.service.ts)
O serviço implementa a lógica de negócios.

events.service.ts
Contém métodos para criar, buscar e atualizar eventos.

📂 Repositório (events.repository.ts)
Lida diretamente com as consultas ao banco de dados.

events.repository.ts
Gerencia as operações relacionadas a eventos no banco de dados.

📂 Módulo (events.module.ts)
O módulo encapsula os componentes do evento.

events.module.ts
Configura o módulo de eventos no NestJS.
