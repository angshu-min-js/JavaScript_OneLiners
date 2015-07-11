function spinalCase(str) {
   return str.replace(/([a-z])([A-Z])/g, '$1 $2').split(/[\s,_]+/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
