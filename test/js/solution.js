var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var gtg = [];
let createDiv = (node, index) => {
  let newDiv = document.createElement("div");
  const parent = document.querySelector(".main");
  newDiv.id = `div-${index}`;
  newDiv.className = 'ad';
  parent.insertBefore(newDiv, node);
}

let isOnlyImage = (node) => {
  console.log(node);
  if (node.children.length === 1 && node.children[0] === 'img') {
    console.log("true")
    return true;
  }
  console.log("false")

  return false;
}

let addAds = () => {
  let windowHeigh = window.outerHeight;
  let ps = document.getElementsByTagName("p");
  let index = 1;
  createDiv(ps[1], index);
  gtg.push(
    googletag.defineSlot(`/18190176/AdThrive_Content_${index}/test`, [300, 250], `div-${index}`).addService(googletag.pubads())
  )
  index++;
  let i = 2;
  while (i < ps.length && index < 10) {
    while (i < ps.length && index < 10 && Math.floor((ps[i].offsetTop + (index - 1) * 50) / windowHeigh) === index - 2) {
      i++;
    }
    i++
    createDiv(ps[i], index);
    if (index % 2 === 1) {
      gtg.push(
        googletag.defineSlot(`/18190176/AdThrive_Content_${index}/test`, [320, 50], `div-${index}`).addService(googletag.pubads())
      );
    } else {
      gtg.push(
        googletag.defineSlot(`/18190176/AdThrive_Content_${index}/test`, [300, 250], `div-${index}`).addService(googletag.pubads())
      )
    }

    index++;
  }
}

googletag.cmd.push(() => {
  var headerMapping = googletag.sizeMapping()
    .addSize([0, 0], [320, 50])
    .addSize([1000, 0], [728, 90])
    .build();

  googletag.pubads().setTargeting('siteId', 'test');
  googletag.pubads().enableSingleRequest();
  googletag.pubads().addEventListener('slotRenderEnded', (event) => {
    setTimeout(() => {
      googletag.destroySlots([headerSlot]);
    }, 5000);
  });
  googletag.pubads().addEventListener('impressionViewable', (event) => {
    setTimeout(() => {
      googletag.destroySlots([headerSlot]);
    }, 2000);
  })

  var headerSlot = googletag.defineSlot('/18190176/AdThrive_Header_1/test', [320, 50], 'header-ad')
    .defineSizeMapping(headerMapping)
    .addService(googletag.pubads());
  addAds();
  googletag.enableServices();
  googletag.display('header-ad');
});


