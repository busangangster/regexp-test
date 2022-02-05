const str = `
010-1234-5678
thesecon@gmail.com
No pain No gain
The quick brown fox jumps over the lazy dog
abbcccdddd
`


console.log( 
  str.match(/(?<=@).{1,}/g)
)