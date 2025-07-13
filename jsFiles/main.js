// surrounding-area
const areas = document.querySelectorAll('.surrounding-area');
// surrounding-1
const surroundingContainer = document.querySelector('.surrounding-1');

// Function to reset all
function resetAreas() {
  areas.forEach(area => {
    area.classList.remove('area-0', 'area-1', 'surrounding-area-display-non');
    area.classList.add('width-0', 'surrounding-area-display');

    // Also remove background classes from image-area
    const imageDiv = area.querySelector('.image-area');
    if (imageDiv) {
      imageDiv.classList.remove('background-1', 'background-2', 'background-3');
    }
  });
}

// Attach click event to each surrounding-area div
areas.forEach((clickedArea, index) => {
  clickedArea.addEventListener('click', (event) => {
    event.stopPropagation(); // prevent bubbling to container and document

    // Remove all area-0, area-1, width-0, display-non
    areas.forEach(area => {
      area.classList.remove('area-0', 'area-1', 'width-0', 'surrounding-area-display-non');

      // Remove background classes from all image-area divs
      const imageDiv = area.querySelector('.image-area');
      if (imageDiv) {
        imageDiv.classList.remove('background-1', 'background-2', 'background-3');
      }
    });

    // Add area-0 and display-non to clicked
    clickedArea.classList.add('area-0', 'surrounding-area-1', 'surrounding-area-display-non');

    // Add area-1 to others
    areas.forEach(area => {
      if (area !== clickedArea) {
        area.classList.add('area-1');
      }
    });

    // 💬 Print hello1/2/3
    console.log(`hello${index + 1}`);

    // 🎨 Add background-1/2/3 to image-area inside clickedArea
    const clickedImage = clickedArea.querySelector('.image-area');
    if (clickedImage) {
      clickedImage.classList.add(`background-${index + 1}`);
    }
  });
});

// Attach click event to the surrounding-1 container div
if (surroundingContainer) {
  surroundingContainer.addEventListener('click', (event) => {
    // This only triggers if user clicks empty space inside surrounding-1
    if (event.target === surroundingContainer) {
      resetAreas();
    }
  });
}

// Attach click event to the whole document body
document.body.addEventListener('click', (event) => {
  // Check if click was inside surrounding-1 container
  if (surroundingContainer.contains(event.target)) {
    // Do nothing, container or areas handlers already manage this
    return;
  }
  // Otherwise, reset
  resetAreas();
});
