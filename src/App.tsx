import React, { useState } from 'react';
import styled from 'styled-components';
import RetroButton from './components/RetroButton';
import RetroCard from './components/RetroCard';
import RetroDropdown from './components/RetroDropdown';
import RetroHeroImage from './components/RetroHeroImage';
import RetroImage from './components/RetroImage';
import RetroLabel from './components/RetroLabel';
import RetroRadio from './components/RetroRadio';
import RetroTable from './components/RetroTable';
import RetroText from './components/RetroText';

const Container = styled.div`
    font-family: monospace;
    width: 50%;
    margin-right: auto;
    margin-left: auto;

`
const ComponentContainer = styled.div`
    display: flex;
    padding: 10px;
`

function App() {

    const [selectedOption, setSelectedOption] = useState("1");

    const handleSelect = (option: string) => {
        setSelectedOption(option);
    };

    const headerData = ["First Name", "Last Name"];
    const rowData = [
        ["John", "Doe"],
        ["Jane", "Smith"],
        ["Alyssa", "Locke"],
        ["May", "Weatherman"],
        ["Lucy", "Clarke"]
    ];
    const footerData = ["Total", 5];
    
    return (
        <div className="App">
            <Container>
                <h1>Aena's Retro Component Library</h1>
                <h3>Take a look at some examples below:</h3>
                <hr />
                <ComponentContainer>
                    <RetroButton label="Click me" buttonId="button1" backgroundColor="lightblue" disabled={false} />
                </ComponentContainer>
                <ComponentContainer>
                    <RetroCard title="Card Title" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo magni perspiciatis ipsa corrupti deleniti, commodi fugiat odit autem eum iure reiciendis ea, soluta quas eos sapiente et expedita quidem nisi?" disabled={false} backgroundColor="orange" />
                </ComponentContainer>
                <ComponentContainer>
                    <RetroDropdown dropdownLabel="Select an option" options={[{ label: "Option 1", value: "1" }, { label: "Option 2", value: "2" }]} selectedOption={selectedOption} onSelect={handleSelect} disabled={false} labelBackgroundColor="pink" />
                </ComponentContainer>
                <ComponentContainer>
                    <RetroHeroImage src="https://picsum.photos/600/200" alt="Placeholder Image" title="Hero Title" disabled={false} backgroundColor="lightblue" />
                </ComponentContainer>
                <ComponentContainer>
                    <RetroImage src="https://picsum.photos/200/200" alt="Placeholder Image" disabled={false} backgroundColor="orange"/>
                </ComponentContainer>
                <ComponentContainer>
                    <RetroLabel label="Label" labelFor="userLastName" backgroundColor="lightblue" disabled={false} />
                </ComponentContainer>
                <ComponentContainer>
                    <RetroText label="This is my really long text." textId="helloText" backgroundColor="pink" disabled={false} />
                </ComponentContainer>
                <ComponentContainer>
                    <RetroRadio id="radio1" name="group1" value="2" label="Option 1" onChange={() => { }} disabled={false} backgroundColor="lightblue" />
                    <RetroRadio id="radio2" name="group1" value="2" label="Option 2" onChange={() => { }} disabled={false} backgroundColor="pink" />
                    <RetroRadio id="radio3" name="group1" value="3" label="Option 3" onChange={() => { }} disabled={false} backgroundColor="orange" />
                </ComponentContainer>
                <ComponentContainer>
                    <RetroTable
                        tableId="testTable"
                        headerData={headerData}
                        rowData={rowData}
                        footerData={footerData}
                        disabled={false}
                        headerBackgroundColor="pink"
                        footerBackgroundColor="pink"
                    />
                </ComponentContainer>
                
            </Container>
        </div>
    );
}

export default App;

