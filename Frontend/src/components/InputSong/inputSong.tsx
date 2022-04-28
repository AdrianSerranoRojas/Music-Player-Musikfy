import TextField from '@mui/material/TextField';

function InputSong({
    value,
}) {

return (
<div className="mb-3">
    <TextField id="outlined-basic" label={value} variant="outlined" />
</div>
)}

export default InputSong