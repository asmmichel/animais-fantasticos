import SectionSuaves from './modules/section-suaves.js';
import SemaforoFuncionamento from './modules/semaforo-funcionamento.js';
import Tooltip from './modules/tooltip.js';
import FotosComSuasDescricoes from './modules/fotos-com-suas-descricoes.js';
import MenuMobile from './modules/menu-mobile.js';
import Modal from './modules/modal.js';
import Submenu from './modules/submenu.js';
import fetchNumerosAnimais from './modules/fetch-numeros-animais.js';
import fetchPrecoBitcoin from './modules/fetch-preco-bitcoin.js';
import RespostasFaqAcorddion from './modules/respostas-faq-acorddion.js';
import ScrollDosLinksInternosSuave from './modules/scroll-dos-links-internos-suave.js';


const initScrollSuave = new ScrollDosLinksInternosSuave('[data-links-internos] a[href^="#"]');
initScrollSuave.init();

const initFaqAcorddion = new RespostasFaqAcorddion('[data-faq-acordeao] dt');
initFaqAcorddion.init();

const initFotosDescricoes = new FotosComSuasDescricoes('[data-fotos-dos-animais] li', '[data-descricoes-dos-animais] section');
initFotosDescricoes.init();

const initModal = new Modal('[data-abrir-modal]', '[data-fechar-modal]', '[data-section-modal]');
initModal.init();

const initTooltip = new Tooltip('[data-div-mapa]');
initTooltip.init();

const initSectionSuaves = new SectionSuaves('[data-aparecer-section]');
initSectionSuaves.init();

const initSubmenu = new Submenu('[data-submenu]');
initSubmenu.init();

const initMenuMobile = new MenuMobile('[data-menu-mobile-botao]', '[data-menu-mobile]');
initMenuMobile.init();

const initSemaforoFuncionamento = new SemaforoFuncionamento('[data-dias-de-funcionamento]');
initSemaforoFuncionamento.init();


fetchNumerosAnimais('./api/numeros-animais-api.json');
fetchPrecoBitcoin('https://blockchain.info/ticker');
