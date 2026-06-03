/**
 * ============================================
 * CONFIGURAÇÃO — Edite aqui com seus dados
 * ============================================
 */
const CONFIG = {
  nome: 'Marcos Levi',
  email: 'marcoslevi1902@gmail.com',
  telefone: '5511920958755', // só números (com DDD)
  github: 'https://github.com/seuusuario',
  linkedin: 'https://linkedin.com/in/seuusuario',
};

/**
 * Projetos do portfólio
 * tipo: "exemplo" = demos | "cliente" = trabalhos reais
 * url: caminho relativo ou link externo
 */
const PROJETOS = [
  {
    id: 'academia',
    nome: 'IronPulse Academia',
    tipo: 'exemplo',
    categoria: 'Academia / Fitness',
    descricao: 'Site completo com planos, modalidades, grade de horários, equipe e formulário de contato.',
    url: 'https://academia-zeta-nine.vercel.app',
    thumb: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    tags: ['HTML', 'CSS', 'JS'],
    destaques: [
      'Hero com estatísticas animadas',
      'Planos mensal/anual',
      'Grade de aulas por dia',
      'Design dark esportivo',
    ],
  },
  {
    id: 'restaurante',
    nome: 'Trattoria Aurora',
    tipo: 'exemplo',
    categoria: 'Restaurante italiano',
    descricao: 'Landing page com cardápio por categorias, reservas, chef, eventos e mapa.',
    url: 'https://restaurante-bay-zeta.vercel.app',
    thumb: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    tags: ['HTML', 'CSS', 'JS'],
    destaques: [
      'Cardápio com abas interativas',
      'Formulário de reserva',
      'Seção do chef e FAQ',
      'Visual elegante escuro/dourado',
    ],
  },
  {
    id: 'veterinario',
    nome: 'PetVida Clínica',
    tipo: 'exemplo',
    categoria: 'Clínica veterinária',
    descricao: 'Site institucional com serviços, plano de saúde pet, emergência 24h e agendamento.',
    url: 'https://veterinario-sooty.vercel.app',
    thumb: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&q=80',
    tags: ['HTML', 'CSS', 'JS'],
    destaques: [
      'Barra de emergência fixa',
      'Tabela de serviços por categoria',
      'Planos Básico / Plus / Premium',
      'Tema claro acolhedor',
    ],
  },
  {
    id: 'sorveteria',
    nome: 'Doce Gelato',
    tipo: 'exemplo',
    categoria: 'Sorveteria artesanal',
    descricao: 'Site colorido com cardápio, promoções, lojas, delivery e pedido online.',
    url: 'https://sorveteria-beta-five.vercel.app',
    thumb: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80',
    tags: ['HTML', 'CSS', 'JS'],
    destaques: [
      'Cardápio de sorvetes, açaí e shakes',
      'Sabor da semana em destaque',
      '3 unidades + links delivery',
      'Visual divertido e verão',
    ],
  },
  // Adicione seus projetos reais abaixo:
  // {
  //   id: 'meu-site',
  //   nome: 'Site do Cliente X',
  //   tipo: 'cliente',
  //   categoria: 'E-commerce',
  //   descricao: 'Descrição do projeto real.',
  //   url: 'https://site-do-cliente.com.br',
  //   thumb: 'url-da-imagem.jpg',
  //   tags: ['HTML', 'CSS'],
  //   destaques: ['Feature 1', 'Feature 2'],
  // },
];

// ============================================
// Aplicação CONFIG na página
// ============================================
document.getElementById('heroName').textContent = CONFIG.nome;
document.getElementById('footerName').textContent = CONFIG.nome;
document.getElementById('anoFooter').textContent = new Date().getFullYear();
const telFormatado = formatTelefone(CONFIG.telefone);

document.getElementById('contatoEmail').textContent = CONFIG.email;
document.getElementById('contatoEmail').href = `mailto:${CONFIG.email}`;
document.getElementById('contatoTelefone').textContent = telFormatado;
document.getElementById('contatoTelefone').href = `tel:+${CONFIG.telefone}`;
document.getElementById('contatoWhatsapp').href = `https://wa.me/${CONFIG.telefone}`;
document.getElementById('contatoWhatsapp').textContent = telFormatado;
document.getElementById('contatoEmailBtn')?.setAttribute('href', `mailto:${CONFIG.email}`);
document.querySelector('.contato__actions .btn--primary')?.setAttribute('href', `https://wa.me/${CONFIG.telefone}`);
document.getElementById('linkGithub').href = CONFIG.github;
document.getElementById('linkLinkedin').href = CONFIG.linkedin;
document.getElementById('linkEmail').href = `mailto:${CONFIG.email}`;

// Atualiza código no hero
const codeName = document.querySelector('.code-window .s');
if (codeName) {
  const codeEl = document.querySelector('.code-window__body code');
  if (codeEl) {
    codeEl.innerHTML = codeEl.innerHTML.replace('"Seu Nome"', `"${CONFIG.nome}"`);
  }
}

function formatTelefone(num) {
  const n = num.replace(/\D/g, '');
  if (n.length >= 12) {
    return `(${n.slice(2, 4)}) ${n.slice(4, 9)}-${n.slice(9)}`;
  }
  return n;
}

// Header scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});
nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.classList.remove('active');
    nav?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Reveal
document.querySelectorAll('.reveal').forEach((el) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );
  observer.observe(el);
});

// Counters
document.querySelectorAll('[data-count]').forEach((el) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = parseInt(el.dataset.count, 10);
        const duration = 1500;
        const start = performance.now();
        const update = (now) => {
          const p = Math.min((now - start) / duration, 1);
          el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
          if (p < 1) requestAnimationFrame(update);
          else el.textContent = target;
        };
        requestAnimationFrame(update);
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  observer.observe(el);
});

// Render projetos
const projetosGrid = document.getElementById('projetosGrid');
const filtros = document.querySelectorAll('.filtro');

function renderProjetos(filtro = 'todos') {
  const lista =
    filtro === 'todos' ? PROJETOS : PROJETOS.filter((p) => p.tipo === filtro);

  projetosGrid.innerHTML = lista
    .map(
      (p) => `
    <article class="projeto-card" data-tipo="${p.tipo}" data-id="${p.id}">
      <div class="projeto-card__thumb" style="background-image: url('${p.thumb}')">
        <span class="projeto-card__badge ${p.tipo === 'cliente' ? 'projeto-card__badge--cliente' : ''}">
          ${p.tipo === 'exemplo' ? 'Exemplo' : 'Cliente'}
        </span>
      </div>
      <div class="projeto-card__body">
        <span class="projeto-card__tipo">${p.categoria}</span>
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <div class="projeto-card__tags">
          ${p.tags.map((t) => `<span>${t}</span>`).join('')}
        </div>
        <div class="projeto-card__actions">
          <a href="${p.url}" class="btn-live" target="_blank" rel="noopener">Ver site →</a>
          <button type="button" class="btn-info" data-projeto="${p.id}">Detalhes</button>
        </div>
      </div>
    </article>
  `
    )
    .join('');

  projetosGrid.querySelectorAll('[data-projeto]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const proj = PROJETOS.find((x) => x.id === btn.dataset.projeto);
      if (proj) openModal(proj);
    });
  });
}

renderProjetos();

filtros.forEach((btn) => {
  btn.addEventListener('click', () => {
    filtros.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjetos(btn.dataset.filtro);
  });
});

// Modal
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');

function openModal(proj) {
  modalBody.innerHTML = `
    <p class="modal-tipo">${proj.categoria} · ${proj.tipo === 'exemplo' ? 'Projeto de exemplo' : 'Cliente'}</p>
    <h3>${proj.nome}</h3>
    <p>${proj.descricao}</p>
    <ul>
      ${proj.destaques.map((d) => `<li>${d}</li>`).join('')}
    </ul>
    <a href="${proj.url}" class="btn btn--primary btn--block" target="_blank" rel="noopener">Abrir site ao vivo</a>
  `;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalClose?.addEventListener('click', closeModal);
modalBackdrop?.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Atualiza contador de projetos
const countProjetos = document.querySelector('.sobre__stats [data-count="4"]');
if (countProjetos) {
  countProjetos.dataset.count = PROJETOS.length;
}
