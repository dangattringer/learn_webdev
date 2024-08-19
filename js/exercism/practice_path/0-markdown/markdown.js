export function parse(markdown) {
  let result = markdown;
  result = result.replace(/__(.*?)__/g, '<strong>$1</strong>');
  result = result.replace(/_([^_]*)_/g, '<em>$1</em>');
  result = result.replace(/(^([^#*]|#{7}).*$)/gm, '<p>$1</p>');
  result = result.replace(/^\* (.*)$/gm, '<li>$1</li>');
  result = result.replace(/((<li>.*?<\/li>\s*)+)/g, '<ul>$1</ul>');
  for (let i = 1; i <= 6; i++) {
   result = result.replace(new RegExp(`^#{${i}} (.*)$`, 'gm'), `<h${i}>$1</h${i}>`);
  }

  result = result.replace(/(<\/[^>]*>)\n/g, '$1');
  return result;
}