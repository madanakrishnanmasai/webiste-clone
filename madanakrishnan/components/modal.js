var modalContainer = document.createElement('div');
modalContainer.className = 'modal-container';
modalContainer.id = 'modal_container';

var modal = document.createElement('div');
modal.className = 'modal';

var modalCont = document.createElement('div');
modalCont.className = 'modal-cont';

var modalImage = document.createElement('div');
modalImage.className = 'modal-image';

var image = document.createElement('img');
image.src =
  'https://image.freepik.com/free-vector/flat-university-concept-background_23-2148192915.jpg';

modalImage.append(image);

var modalContent = document.createElement('div');
modalContent.className = 'modal-content';

var h1 = document.createElement('h1');
h1.textContent = 'Enter the code sent to your phone';

var p = document.createElement('p');
p.textContent = 'We sent it to 9790605954';

var inputBox = document.createElement('div');
inputBox.className = 'input-box';

var inputImage = document.createElement('img');
inputImage.src =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAANlBMVEUSiAdgmCtwcL14eMB5ecB9fcOAgMWJicmSksyTk8yTk82UlM2vr9q/v+Hg4PH/mTP/u3f///+1rU14AAAARklEQVQoz9XOMRKAIAxE0RhQBJMF7n9ZW1Kwtb4yf2Yn0in5cB6UzJXlbOEQsj3A7duc0AqU5HKRbBU49+PTVT2+dlDyWy8zUxeIwBMVGgAAAABJRU5ErkJggg==';

var input = document.createElement('input');
input.className = 'phone-number';
input.id = 'phone';
input.placeholder = '0000';

inputBox.append(inputImage, input);

var continueBtn = document.createElement('button');
continueBtn.textContent = 'Continue';
continueBtn.className = 'modal-button';

modalContent.append(h1, p, inputBox, continueBtn);

modal.append(modalImage, modalContent);

modalContainer.append(modal);

container.append(modalContainer);
