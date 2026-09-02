/**
 * RPGZine - Interactive Dice Roller Widget
 */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // Create Dice Roller Modal HTML structure dynamically
    const modalHTML = `
      <div id="dice-modal-overlay" class="dice-modal-overlay">
        <div class="dice-modal">
          <button type="button" class="close-modal" id="close-dice-modal">&times;</button>
          <h3 style="margin-top:0; color: var(--accent-gold); font-family: var(--font-heading);">
            🎲 Rolador de Dados RPG
          </h3>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 15px;">
            Escolha o dado para realizar a rolagem:
          </p>
          <div class="dice-grid">
            <button class="dice-chip" data-sides="4">d4</button>
            <button class="dice-chip" data-sides="6">d6</button>
            <button class="dice-chip" data-sides="8">d8</button>
            <button class="dice-chip" data-sides="10">d10</button>
            <button class="dice-chip" data-sides="12">d12</button>
            <button class="dice-chip" data-sides="20" style="border-color: var(--accent-gold); color: var(--accent-gold);">d20</button>
            <button class="dice-chip" data-sides="100">d100</button>
          </div>
          <div class="dice-result-box">
            <div id="dice-result-label" style="font-size: 0.85rem; color: var(--text-muted);">Clique em um dado acima</div>
            <div id="dice-result-num" class="dice-result-num">-</div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modalOverlay = document.getElementById('dice-modal-overlay');
    const closeBtn = document.getElementById('close-dice-modal');
    const resultLabel = document.getElementById('dice-result-label');
    const resultNum = document.getElementById('dice-result-num');
    const diceChips = document.querySelectorAll('.dice-chip');

    // Function to open modal
    window.openDiceRoller = function () {
      if (modalOverlay) {
        modalOverlay.classList.add('active');
      }
    };

    // Function to close modal
    function closeModal() {
      if (modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
      modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) {
          closeModal();
        }
      });
    }

    // Dice rolling logic with animation
    diceChips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        const sides = parseInt(chip.getAttribute('data-sides'), 10);
        rollDice(sides);
      });
    });

    function rollDice(sides) {
      resultLabel.textContent = `Rolando d${sides}...`;
      resultNum.style.transform = 'scale(0.8)';
      resultNum.style.opacity = '0.5';

      let counter = 0;
      const interval = setInterval(function () {
        const temp = Math.floor(Math.random() * sides) + 1;
        resultNum.textContent = temp;
        counter++;
        if (counter > 8) {
          clearInterval(interval);
          const finalResult = Math.floor(Math.random() * sides) + 1;
          resultNum.textContent = finalResult;
          resultNum.style.transform = 'scale(1)';
          resultNum.style.opacity = '1';
          
          if (sides === 20 && finalResult === 20) {
            resultLabel.textContent = `🎯 Crítico! (d20)`;
            resultNum.style.color = 'var(--accent-emerald)';
          } else if (sides === 20 && finalResult === 1) {
            resultLabel.textContent = `💀 Falha Crítica! (d20)`;
            resultNum.style.color = 'var(--accent-ruby)';
          } else {
            resultLabel.textContent = `Resultado no d${sides}:`;
            resultNum.style.color = 'var(--accent-gold)';
          }
        }
      }, 50);
    }
  });
})();
