import type { ProfileData, ProjectSection } from '../types/portfolio';

export const profile: ProfileData = {
  name: 'Westes Mesquita da Silva Oliveira',
  course: 'DSM - Portfólio pessoal/técnico',
  role: 'Desenvolvedor Full Stack',
  summary:
    'Olá, bem vind@ à uma parte do meu trabalho até aqui dentro da minha faculdade. Aqui você encontrará projetos que demonstram minhas habilidades e experiências em desenvolvimento de software. Busco sempre conhecer novas tecnologias e aprimorar minhas habilidades, então fique à vontade para explorar os projetos e entrar em contato caso queira saber mais ou colaborar em algo juntos! Em breve, como empresa!',
  linkedin: 'A ser adicionado',
  github: 'https://github.com/westesmso',
  email: 'mesquita.westesoficial@gmail.com',
  initials: 'WMSO',
  avatar: require('../../assets/icon.png'),
};

export const projects: ProjectSection[] = [
  {
    semester: '1º semestre',
    title: 'Projeto Reciclar',
    description:
      'O site "Projeto Reciclar" tem como objetivo conscientizar e facilitar a reciclagem de diferentes materiais. Aqui estão as principais seções e como cada parte do código contribui para a experiência do usuário.',
    partner: 'Sr. Wilson',
    links: ['Repositório: https://github.com/westesmso/Projeto_Reciclar'],
    photos: [
      {
        label: 'Tela inicial do projeto',
        source: require('../../assets/projeto_1/take_1.png'),
      },
      {
        label: 'Print 2',
        source: require('../../assets/projeto_1/take_2.png'),
      },
      {
        label: 'Print 3',
        source: require('../../assets/projeto_1/take_3.png'),
      },
    ],
    accent: '#f97316',
  },
  {
    semester: '2º semestre',
    title: 'theHive -- S.a.l.a',
    description:
      'Projeto desenvolvido como proposta de solução pra gerenciar as reservas dos laboratórios da FATEC.',
    partner: 'Fatec Itaquera; Rodrigo Faustino (professor orientador)',
    links: ['Github: https://github.com/westesmso/theHive----Sala'],
    photos: [
      {
        label: 'Foto 1',
        source: require('../../assets/projeto_2/take_1.png'),
      },
      {
        label: 'Foto 2',
        source: require('../../assets/projeto_2/take_2.png'),
      },
      {
        label: 'Foto 3',
        source: require('../../assets/projeto_2/take_3.png'),
      },
    ],
    accent: '#0ea5e9',
  },
  {
    semester: '3º semestre',
    title: 'Pilates Studio',
    description:
      'Projeto feito para gerenciar as reservas de um estúdio de pilates, com funcionalidades como cadastro de clientes, agendamento de aulas e controle de pagamentos.',
    partner: 'Fatec Itaquera; Professor Marcos (professor orientador)',
    links: ['Repositório: https://github.com/westesmso/PI-Pilates-backend'],
    photos: [],
    accent: '#22c55e',
  },
  {
    semester: '4º semestre',
    title: 'Atelie Java Spring',
    description:
      'Projeto feito para gerenciar as ordens de serviço de um ateliê de costura, com funcionalidades como cadastro de clientes, controle de estoque e gerenciamento de ordens de serviço tal como status, prazos e pagamentos, contando também como funcionalidades de gestão financeira.',
    partner: 'Drih Ateliê; Softwork Solutions (startup que assumiu o projeto depois)',
    links: ['Repositório: https://github.com/westesmso/Atelie_java_spring'],
    photos: [],
    accent: '#a855f7',
  },
];