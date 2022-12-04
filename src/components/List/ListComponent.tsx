import { ComponentProps } from "react";
import { ListItem, List, ListItemText, Box, createTheme, Typography } from "@mui/material"

export function ListComponent({ predictions }: ComponentProps<any>) {
    const theme = createTheme({
        palette: {
          background: {
            paper: '#CCCCCC',
          }
        }
      });
    return (
        <Box className="box"    >
            <List>
                {predictions.map((i: any) =>
                    <ListItem >
                        <ListItemText  sx={{
                        bgcolor: 'background.paper',
                        boxShadow: 4,
                        borderRadius: 2,
                        p: 4,
                        minWidth: 300,
                      }} >
                            Entered name:<Typography component="h1" variant="h5">{i.name}</Typography> 
                            <br/>
                            Predicted gender:<Typography component="h1" variant="h5">{i.gender}</Typography> 
                            <br/>
                            Predicted nationality:<Typography component="h1" variant="h5">{i.nationality}</Typography>
                        </ListItemText>
                    </ListItem>
                )}
            </List>
        </Box>
    )
}
