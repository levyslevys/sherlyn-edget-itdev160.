// Data, simulate a database response
var data = [
    {
      name: 'Open In Browser',
      description: 'Visual Studio Code Open In Browser',
      author: 'TechER',
      url:
        'https://marketplace.visualstudio.com/itemdetails?itemName=techer.open-in-browser',
      downloads: 791,691,
      stars: 22,
      selector: 'p1'
    },
    {
      name: 'Rainbow Brackets',
      description: 'Rainbow Brackets',
      author: '2gua',
      url:
        'https://marketplace.visualstudio.com/itemdetails?itemName=2gua.rainbow-brackets',
      downloads: 212,573,
      stars: 54,
      selector: 'p2'
    }
    {
        name: 'Black Line at the End of a File',
        description: 'Black Line at the End of a File',
        author: 'riccardoNovaglia',
        url:
          'https://marketplace.visualstudio.com/itemdetails?itemName=riccardoNovaglia.missinglineendoffile',
        downloads: 10,836,
        stars: 2,
        selector: 'p3'
      }
  ];
  
  // Package constructor function
  function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;
  
    this.getFormattedDownloads = function() {
      return this.downloads.toLocaleString();
    };
  
    this.getFormattedStars = function() {
      return this.stars.toLocaleString();
    };
  }
  
  // Function to write package data to page
  function writePackageInfo(package) {
    // Get reference to DOM elements
    var selector = package.selector,
      nameEl = document.getElementById(selector + '-name'),
      descEl = document.getElementById(selector + '-description');
    // TODO: get reference to remaining package properties
  
    // Write package data to DOM elements
    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    // TODO: write the remaining properties to the DOM elements
  }
  
  function init() {
    // Write package data
    for (let i = 0; i < data.length; i++) {
      const package = data[i];
      //console.log(package.name);
      writePackageInfo(package);
    }
  
    // TODO: 
  }
  
 

  