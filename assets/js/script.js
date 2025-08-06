// ===== BRUNO SILVA PORTFOLIO - INTERACTIVE SCRIPT =====

// Configurações
const config = {
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetweenTexts: 2000,
    animationDelay: 300
};

// Textos para animação de digitação
const typingTexts = [
    "Futuro Desenvolvedor Full Stack",
    "Estudante de ADS na Unisenai", 
    "Apaixonado por Tecnologia",
    "Inovador em Soluções Web"
];

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initTypingAnimation();
    initScrollAnimations();
    initContactForm();
    initThemeEffects();
    initMobileMenu();
    initSmoothScrolling();
    initAdvancedEffects();
    initInteractiveElements();
    initProgressBars();
    initMatrixEffect();
    initMagneticButtons();
    initTiltEffect();
});

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initTypingAnimation();
    initScrollAnimations();
    initContactForm();
    initThemeEffects();
    initMobileMenu();
    initSmoothScrolling();
    initAdvancedEffects();
    initInteractiveElements();
    initProgressBars();
    initMatrixEffect();
    initMagneticButtons();
    initTiltEffect();
    initThemeToggle();
    initMusicToggle();
    initKeyboardShortcuts();
    initEasterEggs();
    initAchievementBadges();
    initAdvancedInteractions();
});

// ===== BADGES DE CONQUISTA =====
function initAchievementBadges() {
    const badges = document.querySelectorAll('.badge');
    
    badges.forEach((badge, index) => {
        badge.addEventListener('click', () => {
            // Efeito de "desbloqueio"
            badge.style.animation = 'bounceIn 0.6s ease-out';
            
            const messages = [
                '💻 Código limpo é vida!',
                '📱 Mobile first sempre!',
                '🚀 Performance é prioridade!',
                '❤️ UX é fundamental!'
            ];
            
            showNotification(messages[index], 'success');
            
            // Salvar conquista
            const achievements = JSON.parse(localStorage.getItem('achievements') || '[]');
            if (!achievements.includes(index)) {
                achievements.push(index);
                localStorage.setItem('achievements', JSON.stringify(achievements));
            }
        });
        
        // Verificar se já foi desbloqueada
        const achievements = JSON.parse(localStorage.getItem('achievements') || '[]');
        if (achievements.includes(index)) {
            badge.classList.add('unlocked');
            badge.style.background = 'var(--gradient-primary)';
            badge.style.color = 'white';
        }
    });
}

// ===== INTERAÇÕES AVANÇADAS =====
function initAdvancedInteractions() {
    // Efeito de "breathing" nos elementos importantes
    addBreathingEffect();
    
    // Sistema de partículas interativo
    initInteractiveParticles();
    
    // Efeito de digitação em tempo real
    initLiveTyping();
    
    // Sistema de notificações inteligentes
    initSmartNotifications();
}

function addBreathingEffect() {
    const importantElements = document.querySelectorAll('.btn-primary, .highlight, .logo');
    
    importantElements.forEach(element => {
        element.style.animation = 'breathe 4s ease-in-out infinite';
    });
}

function initInteractiveParticles() {
    let particles = [];
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.6;
    `;
    
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Criar partículas no movimento do mouse
    document.addEventListener('mousemove', (e) => {
        if (particles.length < 50) {
            particles.push({
                x: e.clientX,
                y: e.clientY,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                life: 60,
                color: `hsl(${Math.random() * 60 + 220}, 70%, 60%)`
            });
        }
    });
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles = particles.filter(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life--;
            
            const alpha = particle.life / 60;
            ctx.globalAlpha = alpha;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
            ctx.fill();
            
            return particle.life > 0;
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

function initLiveTyping() {
    // Simular digitação em tempo real no formulário
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.3)';
            input.style.borderColor = 'var(--primary-color)';
        });
        
        input.addEventListener('blur', () => {
            input.style.boxShadow = '';
            input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
        
        input.addEventListener('input', () => {
            // Efeito de "typing" indicator
            const indicator = input.parentNode.querySelector('.typing-indicator') || 
                             document.createElement('span');
            
            if (!input.parentNode.querySelector('.typing-indicator')) {
                indicator.className = 'typing-indicator';
                indicator.textContent = '●●●';
                indicator.style.cssText = `
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--primary-color);
                    font-size: 0.8rem;
                    animation: pulse 1s infinite;
                `;
                input.parentNode.style.position = 'relative';
                input.parentNode.appendChild(indicator);
                
                setTimeout(() => indicator.remove(), 1000);
            }
        });
    });
}

function initSmartNotifications() {
    // Sistema de notificações baseado no comportamento do usuário
    let scrollCount = 0;
    let timeOnSite = Date.now();
    
    window.addEventListener('scroll', () => {
        scrollCount++;
        
        // Notificação de engajamento
        if (scrollCount === 10) {
            showNotification('🎯 Você está explorando bem o portfólio!', 'info');
        }
        
        // Dica de navegação
        if (scrollCount === 25) {
            showNotification('💡 Dica: Use Ctrl+↑/↓ para navegar entre seções', 'info');
        }
    });
    
    // Notificação de tempo no site
    setTimeout(() => {
        const timeSpent = Math.floor((Date.now() - timeOnSite) / 1000);
        if (timeSpent > 30) {
            showNotification('⏱️ Obrigado por dedicar seu tempo ao meu portfólio!', 'success');
        }
    }, 30000);
    
    // Detectar intenção de saída
    document.addEventListener('mouseout', (e) => {
        if (e.clientY <= 0) {
            showNotification('👋 Espera! Não esqueça de entrar em contato!', 'info');
        }
    });
}

// ===== ALTERNADOR DE TEMA =====
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const root = document.documentElement;
    
    // Verificar tema salvo
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        
        // Efeito visual
        themeToggle.style.animation = 'bounceIn 0.6s ease-out';
        setTimeout(() => {
            themeToggle.style.animation = '';
        }, 600);
    });
    
    function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        const icon = themeToggle.querySelector('i');
        
        if (theme === 'light') {
            icon.className = 'fas fa-sun';
            root.style.setProperty('--bg-primary', '#ffffff');
            root.style.setProperty('--bg-secondary', '#f8fafc');
            root.style.setProperty('--bg-tertiary', '#e2e8f0');
            root.style.setProperty('--text-primary', '#1e293b');
            root.style.setProperty('--text-secondary', '#475569');
            root.style.setProperty('--text-muted', '#64748b');
        } else {
            icon.className = 'fas fa-moon';
            root.style.setProperty('--bg-primary', '#0f0f23');
            root.style.setProperty('--bg-secondary', '#1a1a2e');
            root.style.setProperty('--bg-tertiary', '#16213e');
            root.style.setProperty('--text-primary', '#ffffff');
            root.style.setProperty('--text-secondary', '#e2e8f0');
            root.style.setProperty('--text-muted', '#94a3b8');
        }
    }
}

// ===== CONTROLE DE MÚSICA AMBIENTE =====
function initMusicToggle() {
    const musicToggle = document.querySelector('.music-toggle');
    let audioContext;
    let isPlaying = false;
    
    musicToggle.addEventListener('click', () => {
        if (!isPlaying) {
            startAmbientSound();
            musicToggle.classList.add('active');
            musicToggle.querySelector('i').className = 'fas fa-volume-up';
            isPlaying = true;
        } else {
            stopAmbientSound();
            musicToggle.classList.remove('active');
            musicToggle.querySelector('i').className = 'fas fa-music';
            isPlaying = false;
        }
    });
    
    function startAmbientSound() {
        // Criar contexto de áudio para sons ambiente
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Som ambiente sintético (ondas suaves)
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(60, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        
        oscillator.start();
        
        // Modular frequência para efeito ambiente
        setInterval(() => {
            if (isPlaying) {
                const freq = 60 + Math.sin(Date.now() * 0.001) * 20;
                oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
            }
        }, 100);
    }
    
    function stopAmbientSound() {
        if (audioContext) {
            audioContext.close();
            audioContext = null;
        }
    }
}

// ===== ATALHOS DE TECLADO =====
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + T = alternar tema
        if ((e.ctrlKey || e.metaKey) && e.key === 't') {
            e.preventDefault();
            document.querySelector('.theme-toggle').click();
        }
        
        // Ctrl/Cmd + M = alternar música
        if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
            e.preventDefault();
            document.querySelector('.music-toggle').click();
        }
        
        // Esc = voltar ao topo
        if (e.key === 'Escape') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Setas para navegar seções
        if (e.key === 'ArrowDown' && e.ctrlKey) {
            e.preventDefault();
            navigateSection('next');
        }
        
        if (e.key === 'ArrowUp' && e.ctrlKey) {
            e.preventDefault();
            navigateSection('prev');
        }
    });
}

// ===== NAVEGAÇÃO POR SEÇÕES =====
function navigateSection(direction) {
    const sections = ['home', 'about', 'qualification', 'projects', 'contact'];
    const currentScroll = window.scrollY;
    let currentSection = 0;
    
    // Encontrar seção atual
    sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element && currentScroll >= element.offsetTop - 200) {
            currentSection = index;
        }
    });
    
    // Navegar
    if (direction === 'next' && currentSection < sections.length - 1) {
        currentSection++;
    } else if (direction === 'prev' && currentSection > 0) {
        currentSection--;
    }
    
    const targetSection = document.getElementById(sections[currentSection]);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== EASTER EGGS =====
function initEasterEggs() {
    // Konami Code
    let konamiCode = [];
    const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konami.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konami.join(',')) {
            activateEasterEgg();
            konamiCode = [];
        }
    });
    
    // Clique triplo no logo
    let logoClicks = 0;
    const logo = document.querySelector('.logo');
    
    logo.addEventListener('click', () => {
        logoClicks++;
        if (logoClicks === 3) {
            activateSecretMode();
            logoClicks = 0;
        }
        
        setTimeout(() => logoClicks = 0, 1000);
    });
}

function activateEasterEgg() {
    // Ativar modo party
    document.body.style.animation = 'hologram 0.5s ease-in-out infinite';
    
    showNotification('🎉 Konami Code ativado! Modo party habilitado!', 'success');
    
    // Criar confetes
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

function activateSecretMode() {
    // Modo desenvolvedor
    const devConsole = document.createElement('div');
    devConsole.innerHTML = `
        <div style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--bg-card);
            border: 1px solid var(--primary-color);
            border-radius: 10px;
            padding: 1rem;
            color: var(--text-primary);
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.8rem;
            z-index: 10000;
            max-width: 300px;
            backdrop-filter: blur(20px);
        ">
            <div style="color: var(--primary-color); margin-bottom: 0.5rem;">
                <i class="fas fa-terminal"></i> Dev Console
            </div>
            <div>Portfolio v2.0.0</div>
            <div>React Simulation: Active</div>
            <div>Performance: Optimized</div>
            <div>Easter Eggs: 2/5 Found</div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="
                        position: absolute;
                        top: 5px;
                        right: 5px;
                        background: none;
                        border: none;
                        color: var(--text-muted);
                        cursor: pointer;
                    ">×</button>
        </div>
    `;
    
    document.body.appendChild(devConsole);
    
    showNotification('🔓 Modo desenvolvedor ativado!', 'success');
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        top: -10px;
        left: ${Math.random() * 100}vw;
        width: 10px;
        height: 10px;
        background: hsl(${Math.random() * 360}, 70%, 60%);
        z-index: 10000;
        animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
        transform: rotate(${Math.random() * 360}deg);
    `;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 5000);
}

// CSS para confetes
const confettiCSS = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;

const style = document.createElement('style');
style.textContent = confettiCSS;
document.head.appendChild(style);

// ===== NAVEGAÇÃO =====
function initNavigation() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Header transparente/sólido baseado no scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(15, 15, 35, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(15, 15, 35, 0.95)';
        }
    });
    
    // Destacar link ativo baseado na seção visível
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== ANIMAÇÃO DE DIGITAÇÃO =====
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    let isThinking = false;
    
    function typeText() {
        if (isPaused) {
            setTimeout(typeText, 100);
            return;
        }
        
        if (isThinking) {
            // Efeito de "pensamento" com pontos
            const dots = '.'.repeat(Math.floor(Date.now() / 500) % 4);
            typingElement.textContent = dots;
            
            setTimeout(() => {
                isThinking = false;
                charIndex = 0;
                typeText();
            }, 1000);
            return;
        }
        
        const currentText = typingTexts[textIndex];
        
        if (isDeleting) {
            // Removendo caracteres
            typingElement.textContent = currentText.substring(0, charIndex);
            charIndex--;
            
            if (charIndex < 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % typingTexts.length;
                isThinking = true;
                typeText();
                return;
            }
        } else {
            // Adicionando caracteres
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex > currentText.length) {
                isDeleting = true;
                isPaused = true;
                setTimeout(() => { isPaused = false; }, 2000); // Pausa para leitura
            }
        }
        
        // Velocidade variável mais natural
        let speed;
        if (isDeleting) {
            speed = Math.random() * 50 + 30; // Deleção mais rápida
        } else {
            speed = Math.random() * 150 + 80; // Digitação mais humana
        }
        
        setTimeout(typeText, speed);
    }
    
    // Iniciar após um delay
    setTimeout(typeText, 1500);
}

// ===== ANIMAÇÕES DE SCROLL =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animação especial para estatísticas
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
                
                // Animação especial para skills
                if (entry.target.classList.contains('skills')) {
                    animateSkills(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const elementsToAnimate = document.querySelectorAll(`
        .about-img, .about-text, .timeline-item, 
        .project-card, .contact-info, .contact-form,
        .stat-item, .certificate-item, .skills
    `);
    
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-ready');
        observer.observe(el);
    });
}

// ===== ANIMAÇÃO DE CONTADORES =====
function animateCounter(element) {
    const finalNumber = parseInt(element.textContent);
    const duration = 2000;
    const increment = finalNumber / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= finalNumber) {
            current = finalNumber;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 16);
}

// ===== ANIMAÇÃO DE SKILLS =====
function animateSkills(skillsContainer) {
    const skills = skillsContainer.querySelectorAll('span');
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.transform = 'translateY(0)';
            skill.style.opacity = '1';
        }, index * 100);
    });
}

// ===== FORMULÁRIO DE CONTATO =====
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simular envio (já que é apenas visual)
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;
        
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        button.disabled = true;
        
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
            button.style.background = '#10b981';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
                button.style.background = '';
                form.reset();
                
                // Mostrar mensagem de sucesso
                showNotification('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
            }, 2000);
        }, 1500);
    });
    
    // Validação em tempo real
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
    });
}

// ===== VALIDAÇÃO DE CAMPOS =====
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    clearError(e);
    
    if (!value) {
        showFieldError(field, 'Este campo é obrigatório');
        return false;
    }
    
    if (field.type === 'email' && !isValidEmail(value)) {
        showFieldError(field, 'Por favor, insira um email válido');
        return false;
    }
    
    return true;
}

function clearError(e) {
    const field = e.target;
    field.style.borderColor = '';
    const error = field.parentNode.querySelector('.field-error');
    if (error) error.remove();
}

function showFieldError(field, message) {
    field.style.borderColor = '#ef4444';
    
    const error = document.createElement('span');
    error.className = 'field-error';
    error.textContent = message;
    error.style.cssText = `
        color: #ef4444;
        font-size: 0.8rem;
        position: absolute;
        bottom: -20px;
        left: 0;
    `;
    
    field.parentNode.style.position = 'relative';
    field.parentNode.appendChild(error);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== NOTIFICAÇÕES =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button onclick="this.parentNode.remove()"><i class="fas fa-times"></i></button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ===== EFEITOS DE TEMA =====
function initThemeEffects() {
    // Efeito de cursor personalizado
    createCustomCursor();
    
    // Efeito de partículas no hero
    createParticles();
    
    // Efeito de paralaxe suave
    initParallax();
}

// ===== CURSOR PERSONALIZADO =====
function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #6366f1;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        mix-blend-mode: difference;
        display: none;
    `;
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursor.style.display = 'block';
    });
    
    // Efeito hover em elementos interativos
    const interactiveElements = document.querySelectorAll('a, button, .project-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = '#6366f1';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'transparent';
        });
    });
}

// ===== EFEITO DE PARTÍCULAS =====
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 1;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: #6366f1;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            opacity: ${Math.random() * 0.5 + 0.1};
        `;
        particlesContainer.appendChild(particle);
    }
    
    hero.appendChild(particlesContainer);
}

// ===== EFEITO PARALAXE =====
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ===== MENU MOBILE =====
function initMobileMenu() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    if (!burger || !navLinks) return;
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        
        // Animação das linhas do burger
        const lines = burger.querySelectorAll('div');
        lines.forEach((line, index) => {
            if (burger.classList.contains('toggle')) {
                if (index === 0) line.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                if (index === 1) line.style.opacity = '0';
                if (index === 2) line.style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                line.style.transform = 'none';
                line.style.opacity = '1';
            }
        });
    });
    
    // Fechar menu ao clicar em um link
    const navLinksItems = navLinks.querySelectorAll('a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
            
            const lines = burger.querySelectorAll('div');
            lines.forEach(line => {
                line.style.transform = 'none';
                line.style.opacity = '1';
            });
        });
    });
}

// ===== SCROLL SUAVE =====
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== CSS ADICIONAL PARA ANIMAÇÕES =====
const additionalStyles = `
    <style>
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .animate-ready {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .nav-active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(15, 15, 35, 0.98);
            backdrop-filter: blur(20px);
            padding: 2rem 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav-active li {
            margin: 0.5rem 0;
            text-align: center;
        }
        
        .field-error {
            color: #ef4444;
            font-size: 0.8rem;
            position: absolute;
            bottom: -20px;
            left: 0;
        }
        
        .skills span {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
        }
        
        @media (max-width: 1024px) {
            .custom-cursor {
                display: none !important;
            }
        }
        
        @media (max-width: 768px) {
            .particles {
                display: none;
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);

// ===== PERFORMANCE E OTIMIZAÇÃO =====
// Debounce para eventos de scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce aos eventos de scroll
const debouncedScroll = debounce(() => {
    // Eventos de scroll otimizados
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===== MOUSE FOLLOWER =====
function createMouseFollower() {
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    follower.style.cssText = `
        width: 8px;
        height: 8px;
        background: var(--primary-color);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9998;
        transition: all 0.1s ease;
        box-shadow: 0 0 20px var(--primary-color);
    `;
    
    document.body.appendChild(follower);
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        follower.style.left = followerX - 4 + 'px';
        follower.style.top = followerY - 4 + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
}

// ===== EFEITO RIPPLE =====
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn, .project-card, .contact-item');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                position: absolute;
                border-radius: 50%;
                background: rgba(99, 102, 241, 0.4);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ===== REVELAÇÃO DE TEXTO =====
function initTextReveal() {
    const titles = document.querySelectorAll('.section-title, .hero h1, .hero h2');
    
    titles.forEach(title => {
        const text = title.textContent;
        title.innerHTML = '';
        
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.cssText = `
                display: inline-block;
                opacity: 0;
                transform: translateY(50px) rotateX(-90deg);
                animation: textReveal 0.6s ease forwards;
                animation-delay: ${i * 0.05}s;
            `;
            title.appendChild(span);
        });
    });
}

// ===== BACKGROUND INTERATIVO =====
function initInteractiveBackground() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    let mouseX = 0, mouseY = 0;
    
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        mouseX = (e.clientX - rect.left) / rect.width;
        mouseY = (e.clientY - rect.top) / rect.height;
        
        const background = hero.querySelector('.hero-background');
        background.style.transform = `
            translate(${mouseX * 20}px, ${mouseY * 20}px)
            scale(1.05)
        `;
    });
    
    hero.addEventListener('mouseleave', () => {
        const background = hero.querySelector('.hero-background');
        background.style.transform = 'translate(0, 0) scale(1)';
    });
}

// ===== ELEMENTOS INTERATIVOS =====
function initInteractiveElements() {
    // Efeito de hover avançado para cards
    const cards = document.querySelectorAll('.project-card, .stat-item, .certificate-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = `
                translateY(-15px) 
                rotateX(${Math.random() * 10 - 5}deg) 
                rotateY(${Math.random() * 10 - 5}deg)
                scale(1.02)
            `;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// ===== BARRAS DE PROGRESSO =====
function initProgressBars() {
    // Adicionar barras de progresso às skills
    const skillsContainer = document.querySelector('.skills');
    if (!skillsContainer) return;
    
    const skillLevels = {
        'JavaScript': 85,
        'React': 80,
        'Node.js': 75,
        'HTML/CSS': 90,
        'Python': 70,
        'Git': 85
    };
    
    skillsContainer.addEventListener('mouseenter', () => {
        skillsContainer.querySelectorAll('span').forEach(skill => {
            const skillName = skill.textContent;
            const level = skillLevels[skillName] || 75;
            
            if (!skill.querySelector('.skill-progress')) {
                const progress = document.createElement('div');
                progress.className = 'skill-progress';
                progress.style.cssText = `
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 3px;
                    background: var(--gradient-primary);
                    width: 0%;
                    transition: width 1s ease;
                    border-radius: 0 0 25px 25px;
                `;
                
                skill.style.position = 'relative';
                skill.appendChild(progress);
                
                setTimeout(() => {
                    progress.style.width = level + '%';
                }, 100);
            }
        });
    });
}

// ===== EFEITO MATRIX =====
function initMatrixEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const matrix = document.createElement('div');
    matrix.className = 'matrix-bg';
    matrix.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.1;
        overflow: hidden;
    `;
    
    // Criar colunas de código
    for (let i = 0; i < 20; i++) {
        const column = document.createElement('div');
        column.style.cssText = `
            position: absolute;
            left: ${(i * 100) / 20}%;
            width: 20px;
            height: 100%;
            font-family: 'JetBrains Mono', monospace;
            font-size: 14px;
            color: var(--primary-color);
            animation: matrixRain ${Math.random() * 5 + 5}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        // Caracteres aleatórios
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        for (let j = 0; j < 20; j++) {
            const char = document.createElement('div');
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            char.style.opacity = Math.random();
            column.appendChild(char);
        }
        
        matrix.appendChild(column);
    }
    
    hero.appendChild(matrix);
}

// ===== BOTÕES MAGNÉTICOS =====
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// ===== EFEITO TILT =====
function initTiltEffect() {
    const cards = document.querySelectorAll('.about-img, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale3d(1.05, 1.05, 1.05)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}
