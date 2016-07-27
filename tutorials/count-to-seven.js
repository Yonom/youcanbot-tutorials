var toolbox = '<xml>';
toolbox += '<block type="actions_chat"></block>';
toolbox += '<block type="text"></block>';
toolbox += '<block type="controls_for"></block>';
toolbox += '<block type="math_number"></block>';
toolbox += '<block type="variables_get">';
toolbox += '    <field name="VAR">i</field>';
toolbox += '</block>';
toolbox += '</xml>';

initTutorial({
    title: 'One, two, three, ...',
    objective: 'Count to 7 in chat.</br></br>Hint: Try to avoid repeating yourself, use the newly available pieces to your advantage.',
    toolbox: toolbox
});