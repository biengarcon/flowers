import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";


function Footer() {
    return (
        <footer id='contacts' className='footer'>
            <Box px={{ xs: 1,sm:5}}
                 py={{xs: 1, sm: 5}} borderTop={1} bgcolor="text.secondary" color="white">
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Наші контакты</Box>
                            <Box>
                                <Link to="" >Instagram</Link>
                            </Box>
                            <Box>
                                <Link to="" >Viber</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Наша Адреса</Box>
                            <Box>
                                <p>м.Харків вул.Сумська</p>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="lg"><Grid><Box><p>Copyright 2021</p></Box></Grid></Container>
            </Box>
        </footer>
    )
}

export default Footer;