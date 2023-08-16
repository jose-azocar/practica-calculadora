
const [input, setInput] = useState('');

const agregarInput = val => {
  setInput(input + val)
}

const calcularResultado = () => {
  if (input) {
    setInput(evaluate(input));
  } else {
    alert("Error")
  }
}