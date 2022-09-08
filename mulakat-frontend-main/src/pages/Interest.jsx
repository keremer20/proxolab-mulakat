import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

// export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Kredi Türü</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Tüketici Kredisi</MenuItem>
          <MenuItem value={20}>Konut Kredisi</MenuItem>
          
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Vade</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Konut</MenuItem>
          <MenuItem value={20}>Tüketici</MenuItem>
          
        </Select>
      </FormControl>

      <TextField label="Outlined secondary" color="secondary" focused />

      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
          Banka Adı
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Toplam Geri Ödeme
        </Typography>
        <Typography variant="body2">
          24.000 TL
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detaylı Bilgi</Button>
      </CardActions>
    </Card>
    </Box>
    
  );
// }