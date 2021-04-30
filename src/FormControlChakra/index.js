import * as React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
} from "@chakra-ui/react"

export default function FormControlChakra() {
    return (
        <ChakraProvider>
            <div className="FormControlUiKit">
                <ChakraProvider>
                    <FormControl id="email">
                        <FormLabel>Введи Email</FormLabel>
                        <Input type="email" />
                        <FormHelperText>И никому о нём не говори</FormHelperText>
                    </FormControl>
                </ChakraProvider>
            </div>
        </ChakraProvider>
    )
}
