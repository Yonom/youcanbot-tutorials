var toolbox = '<xml>';
toolbox += '    <category name="Text" colour="160">';
toolbox += '        <block type="text"></block>';
toolbox += '    </category>';
toolbox += '    <sep></sep>';
toolbox += '    <category name="Actions" colour="20">';
toolbox += '        <block type="actions_chat"></block>';
toolbox += '    </category>';
toolbox += '</xml>';

initTutorial({
    title: 'Hello world!',
    objective: 'Make the bot say "Hello world" by connecting puzzle pieces. Once you are ready, press the <b>PLAY</b> button to run your program. ',
    hint: 'Click on <strong>VIEW SOURCE</strong> to see the code that got generated.',
    toolbox: toolbox
});