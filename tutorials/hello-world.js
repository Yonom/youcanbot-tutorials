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
    objective: 'Make a bot that says "Hello world". Connect puzzle pieces to "on bot run". Once you are ready, press <b>PLAY</b> to run your program.',
    hint: 'Click on <strong>VIEW SOURCE</strong> to see the code that got generated.',
    toolbox: toolbox
});