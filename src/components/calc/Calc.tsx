import {useState} from 'react';
import { Stack, TextField, Typography} from '@mui/material';
import { NumPad } from './NumPad';
import {MathOperations} from './MathOperations';

export const Calc = () => {
    const [input1, setInput1] = useState("");
    const [res, setRes] = useState("");
    const [op, setOp] = useState("");
    const [ff, setFf] = useState("");
    const [error, setError] = useState("");

    const handleNumPadClick = (num: string) => {
      if (op && !ff) {
        setOp("");
      setFf("");
        setRes("");
      }
      setInput1(`${input1}${num}`);
    }

    const handleOperationsClick = (op: string) => {
      setFf(`${input1} ${op}`);
      setOp(op);
      setInput1("");
    }

    const handleClear = () => {
      setFf("");
      setInput1("");
      setOp("");
      setRes("");
    }

    const handleEqualClick = () => {
      let res: number = 0
      console.log("op_", op, "_")
      switch (op) {
        case '+':
          res = parseFloat(ff) + parseFloat(input1);
          break;
        case '-':
          res = parseFloat(ff) - parseFloat(input1);
          break;
        case '*':
          res = parseFloat(ff) * parseFloat(input1);
          break;
        case '/':
          res = parseFloat(ff) / parseFloat(input1);
          break;
        default:
          setError("Error in math op")
      }
      setError("");
      setInput1("");
      setFf("");
      console.log(res)
      setRes(res.toString());
    }

  return (
    <Stack spacing={1}>
      <Typography variant="h4">Testing app - Calculator</Typography>
    <Stack>
      <NumPad handleClick={handleNumPadClick} handleClear={handleClear} />
    </Stack>
    <Stack>
      <MathOperations handleClick={handleOperationsClick} handleEqualClick={handleEqualClick} />
    </Stack>
    <Stack direction="column" width={400}>
      <TextField value={input1}/>
      <Typography variant="subtitle2"
        style={{marginLeft: "15px", height: "20px"}}
        color="gray"
      >{ff || input1}</Typography>
      <TextField value={res} />
      <Typography variant='subtitle2' color="error">{error}</Typography>
    </Stack>
    </Stack>
  )
}
