var toolbox = '<xml>';
toolbox += '    <category name="Text" colour="160">';
toolbox += '        <block type="text"></block>';
toolbox += '    </category>';
toolbox += '    <sep></sep>';
toolbox += '    <category name="Events" colour="65">';
toolbox += '        <block type="events_join"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Actions" colour="20">';
toolbox += '        <block type="actions_chat">';
toolbox += '            <value name="TEXT">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT">abc</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '    </category>';
toolbox += '</xml>';

initTutorial({
    title: 'Hello everyone!',
    objective: 'Write a bot that says hello to everyone who joins the room.<br><br>' + 
        '<div class="alert alert-info"><strong>Hint:</strong> You can join the room again by clicking on "Go to lobby" and then pressing "Rejoin?".</div>',
    toolbox: toolbox
});