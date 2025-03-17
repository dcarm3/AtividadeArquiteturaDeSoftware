# AtividadeArquiteturaDeSoftware

## 1. Descrição do Projeto
O objetivo do projeto é conectar pessoas com interesses em comum a partir de um aplicativo móvel que permite organizar, ingressar e editar eventos, tanto em bares quanto restaurantes.

## 2. Requisitos
### Funcionais:
- Criação de perfil de usuário
- Criação de perfil de estabelecimento
- Criar e ingressar em eventos, públicos ou privados
- Convidar/Remover pessoas para o evento
- Envio de mensagens aos integrantes do evento
- Adicionar e remover amigos
- Recomendações personalizadas de estabelecimentos e pessoas
- Confirmação de presença
- Avaliação de pessoas e estabelecimentos
- Fila de espera para eventos lotados
- Criação de eventos pelo próprio estabelecimento
- Visualizar lotação atual do estabelecimento

### Não-funcionais:
- Confirmar presença até no máximo 1 hora antes do evento
- Limite de 500 caracteres para descrição pessoal
- Editar características do evento até no máximo 2 horas antes do evento
- Uptime de 95.5%
- Mínimo de 2 e máximo de 8 pessoas por evento

## 3. Restrições e Condições
- **Restrições técnicas**: ReactNative, NestJS, PostgreSQL, Firebase, Docker.
- **Restrições não técnicas**:
  - Orçamento: Sem valor adicional
  - Prazo de entrega: 11/2025
  - Requisitos legais e regulatórios: O app deverá cumprir leis de privacidade e proteção de dados, como a LGPD e GDPR.

## 4. Necessidades dos Stakeholders
- Acessibilidade para diferentes necessidades de usuários
- Segurança tanto para usuários como também bares e restarurantes
- Popularização de estabelecimentos

## 5. Tendências tecnológicas
- ReactNative
- Inteligência artificial
- Autenticação biométrica

## 6. Riscos de projeto
- Arquitetura MVC pode não ser ideal
- React Native pode ser lento demais para o app
- Banco não-relacional pode ser melhor que um banco relacional

## 7. Organização dos Componentes do Projeto

```
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
```

### 📂 DTOs (`events/dto/`)
Os DTOs ajudam a validar e definir a estrutura dos dados que são enviados e recebidos.

- **create-event.dto.ts**: Define os campos necessários para criar um evento, como nome, descrição, local, horário e participantes.
- **update-event.dto.ts**: DTO para atualização de eventos, permitindo modificar apenas alguns campos.

### 📂 Entidades (`events/entities/`)
A entidade representa a estrutura do evento no banco de dados.

- **event.entity.ts**: Define a estrutura de armazenamento do evento no banco relacional (MySQL).

### 📂 Controlador (`events.controller.ts`)
O controlador gerencia as requisições HTTP para eventos.

- **events.controller.ts**: Define as rotas para criar e gerenciar eventos.

### 📂 Serviço (`events.service.ts`)
O serviço implementa a lógica de negócios.

- **events.service.ts**: Contém métodos para criar, buscar e atualizar eventos.

### 📂 Módulo (`events.module.ts`)
O módulo encapsula os componentes do evento.

- **events.module.ts**: Configura o módulo de eventos no NestJS.

### 📂 Repositório (`events.repository.ts`)
Lida diretamente com as consultas ao banco de dados.

- **events.repository.ts**: Gerencia as operações relacionadas a eventos no banco de dados.


