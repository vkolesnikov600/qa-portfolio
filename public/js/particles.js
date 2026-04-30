document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".site-nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const colorToggle = document.querySelector(".theme-toggle");
  const header = document.querySelector(".site-header");

  const updateHeaderState = () => {
    header?.classList.toggle("scrolled", window.scrollY > 24);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  menuToggle?.addEventListener("click", () => {
    nav?.classList.toggle("open");
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav?.classList.remove("open");
    });
  });

  const navLinks = [...document.querySelectorAll(".site-nav a")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, {
      rootMargin: "-35% 0px -55%",
      threshold: 0
    });

    sections.forEach((section) => observer.observe(section));
  }

  const createEmitter = (x, y, delay, duration) => ({
    position: { x, y },
    rate: {
      delay,
      quantity: 1
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      size: {
        value: {
          min: 2,
          max: 5.5
        }
      },
      opacity: {
        value: 0.98
      },
      links: {
        opacity: 0.52,
        color: "#cfd4ff"
      },
      life: {
        duration: {
          value: duration
        },
        count: 1
      },
      move: {
        speed: 2.35,
        direction: "none",
        straight: false,
        outModes: {
          default: "bounce"
        }
      }
    }
  });

  const particlesConfig = {
    background: {
      color: "#000000"
    },
    fpsLimit: 60,
    fullScreen: {
      enable: false
    },
    particles: {
      number: {
        value: 155,
        density: {
          enable: true,
          area: 850
        }
      },
      color: {
        value: ["#ffffff", "#dfe4ff", "#9fa8ff"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: {
          min: 0.18,
          max: 0.72
        },
        animation: {
          enable: true,
          speed: 0.35,
          minimumValue: 0.16,
          sync: false
        }
      },
      size: {
        value: {
          min: 1,
          max: 4.4
        },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.7,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 138,
        color: "#cfd4ff",
        opacity: 0.28,
        width: 1.15,
        shadow: {
          enable: true,
          color: "#ffffff",
          blur: 4
        },
        triangles: {
          enable: false
        }
      },
      move: {
        enable: true,
        speed: 0.95,
        random: false,
        straight: false,
        outModes: {
          default: "bounce"
        },
        attract: {
          enable: true,
          rotateX: 900,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 190,
          links: {
            opacity: 0.82
          }
        },
        push: {
          quantity: 3
        }
      }
    },
    detectRetina: true,
    emitters: [
      createEmitter(11, 37, 2.8, 2.4),
      createEmitter(88, 21, 3.4, 2.2),
      createEmitter(79, 66, 4.2, 2.1)
    ]
  };

  const getRandomColors = () => {
    const hue = Math.floor(Math.random() * 360);

    return {
      particles: [
        "#ffffff",
        `hsl(${hue}, 100%, 72%)`,
        `hsl(${(hue + 18) % 360}, 100%, 86%)`
      ],
      links: `hsl(${hue}, 95%, 78%)`,
      emitter: `hsl(${hue}, 100%, 72%)`
    };
  };

  const changeParticlesColor = async () => {
    const container = tsParticles.domItem(0);

    if (!container) {
      return;
    }

    const colors = getRandomColors();

    colorToggle?.style.setProperty("--toggle-color", colors.emitter);

    container.options.particles.color.value = colors.particles;
    container.options.particles.links.color = colors.links;

    container.options.emitters.forEach((emitter) => {
      emitter.particles.color.value = colors.emitter;
      emitter.particles.links.color = colors.links;
    });

    await container.refresh();
  };

  if (window.tsParticles) {
    tsParticles.load("particles", particlesConfig);
  }

  colorToggle?.addEventListener("click", changeParticlesColor);
});
