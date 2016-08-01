var toolbox = '<xml>';
toolbox += '    <category name="Text" colour="160">';
toolbox += '        <block type="text"></block>';
toolbox += '    </category>';
toolbox += '    <sep></sep>';
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
    title: 'Hello world!',
    objective: 'Make the bot say "Hello world" in chat.<br><br>Hint: Once you are ready, press the <b>PLAY</b> button above to run your program.',
    toolbox: toolbox
});