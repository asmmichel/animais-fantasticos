import aparecerSection from './modules/aparecer-section.js';
import criarSemaforoDeFuncionamento from './modules/criar-semaforo-de-funcionamento.js';
import criarTooltipDoMapa from './modules/criar-tooltip-do-mapa.js';
import FotosComSuasDescricoes from './modules/fotos-com-suas-descricoes.js';
import iniciarMenuMobile from './modules/iniciar-menu-mobile.js';
import iniciarModal from './modules/iniciar-modal.js';
import iniciarSobreSubmenu from './modules/iniciar-sobre-submenu.js';
import requisitarFetchNumerosDosAnimais from './modules/requisitar-fetch-numeros-dos-animais.js';
import requisitarFetchPrecoDoBitcoin from './modules/requisitar-fetch-preco-do-bitcoin.js';
import RespostasFaqAcorddion from './modules/respostas-faq-acorddion.js';
import ScrollDosLinksInternosSuave from './modules/scroll-dos-links-internos-suave.js';


const initScrollSuave = new ScrollDosLinksInternosSuave('[data-links-internos] a[href^="#"]');
initScrollSuave.init();

const initFaqAcorddion = new RespostasFaqAcorddion('[data-faq-acordeao] dt');
initFaqAcorddion.init();

const initFotosDescricoes = new FotosComSuasDescricoes('[data-fotos-dos-animais] li', '[data-descricoes-dos-animais] section');
initFotosDescricoes.init();



aparecerSection();
criarSemaforoDeFuncionamento();
criarTooltipDoMapa();
iniciarMenuMobile();
iniciarModal();
iniciarSobreSubmenu();
requisitarFetchNumerosDosAnimais();
requisitarFetchPrecoDoBitcoin();
