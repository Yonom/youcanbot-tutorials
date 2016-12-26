var toolbox = '<xml>';
toolbox += '    <category name="Logic" colour="210">';
toolbox += '        <block type="controls_if"></block>';
toolbox += '        <block type="logic_compare"></block>';
toolbox += '        <block type="logic_operation"></block>';
toolbox += '        <block type="logic_negate"></block>';
toolbox += '        <block type="logic_boolean"></block>';
toolbox += '        <block type="logic_null"></block>';
toolbox += '        <block type="logic_ternary"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Loops" colour="120">';
toolbox += '        <block type="controls_repeat_ext">';
toolbox += '            <value name="TIMES">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">10</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="controls_whileUntil"></block>';
toolbox += '        <block type="controls_for">';
toolbox += '            <value name="FROM">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="TO">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">10</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="BY">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="controls_forEach"></block>';
toolbox += '        <block type="controls_flow_statements"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Math" colour="230">';
toolbox += '        <block type="math_number"></block>';
toolbox += '        <block type="math_arithmetic">';
toolbox += '            <value name="A">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="B">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_single">';
toolbox += '            <value name="NUM">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">9</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_trig">';
toolbox += '            <value name="NUM">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">45</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_constant"></block>';
toolbox += '        <block type="math_number_property">';
toolbox += '            <value name="NUMBER_TO_CHECK">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">0</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_change">';
toolbox += '            <value name="DELTA">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_round">';
toolbox += '            <value name="NUM">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">3.1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_on_list"></block>';
toolbox += '        <block type="math_modulo">';
toolbox += '            <value name="DIVIDEND">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">64</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="DIVISOR">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">10</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_constrain">';
toolbox += '            <value name="VALUE">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">50</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="LOW">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="HIGH">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">100</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_random_int">';
toolbox += '            <value name="FROM">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="TO">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">100</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_random_float"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Text" colour="160">';
toolbox += '        <block type="text"></block>';
toolbox += '        <block type="text_join"></block>';
toolbox += '        <block type="text_append">';
toolbox += '            <value name="TEXT">';
toolbox += '                <shadow type="text"></shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_length">';
toolbox += '            <value name="VALUE">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT">abc</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_isEmpty">';
toolbox += '            <value name="VALUE">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT"></field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_indexOf">';
toolbox += '            <value name="VALUE">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT"></field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="FIND">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT">abc</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_charAt">';
toolbox += '            <value name="VALUE">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT"></field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_getSubstring">';
toolbox += '            <value name="STRING">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT"></field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_changeCase">';
toolbox += '            <value name="TEXT">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT">abc</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_trim">';
toolbox += '            <value name="TEXT">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT">abc</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_checks">';
toolbox += '            <value name="VALUE">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT"></field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="FIND">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT">abc</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_tostring"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Lists" colour="260">';
toolbox += '        <block type="lists_create_with">';
toolbox += '            <mutation items="0"></mutation>';
toolbox += '        </block>';
toolbox += '        <block type="lists_create_with"></block>';
toolbox += '        <block type="lists_repeat">';
toolbox += '            <value name="NUM">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">5</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="lists_length"></block>';
toolbox += '        <block type="lists_isEmpty"></block>';
toolbox += '        <block type="lists_indexOf"></block>';
toolbox += '        <block type="lists_getIndex"></block>';
toolbox += '        <block type="lists_setIndex"></block>';
toolbox += '        <block type="lists_getSublist"></block>';
toolbox += '        <block type="lists_split"></block>';
toolbox += '        <block type="lists_sort"></block>';
toolbox += '    </category>';
toolbox += '    <sep></sep>';
toolbox += '    <category name="Events" colour="65">';
toolbox += '        <block type="events_join"></block>';
toolbox += '        <block type="events_leave"></block>';
toolbox += '        <block type="events_smiley"></block>';
toolbox += '        <block type="events_chat"></block>';
toolbox += '        <block type="events_pm"></block>';
toolbox += '        <block type="events_autotext"></block>';
toolbox += '        <block type="events_move"></block>';
toolbox += '        <block type="events_crown"></block>';
toolbox += '        <block type="events_coin"></block>';
toolbox += '        <block type="events_hide"></block>';
toolbox += '        <block type="events_show"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Actions" colour="20">';
toolbox += '        <block type="actions_smiley">';
toolbox += '            <value name="SMILEY">';
toolbox += '                <shadow type="types_smiley">';
toolbox += '                    <field name="SMILEY">SMILE</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="actions_god">';
toolbox += '            <value name="ENABLED">';
toolbox += '                <shadow type="logic_boolean">';
toolbox += '                    <field name="BOOL">TRUE</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="actions_chat">';
toolbox += '            <value name="TEXT">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT">abc</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="actions_autosay">';
toolbox += '            <value name="AUTOTEXT">';
toolbox += '                <shadow type="types_autotext">';
toolbox += '                    <field name="AUTOTEXT">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="actions_key">';
toolbox += '            <value name="KEY">';
toolbox += '                <shadow type="types_key">';
toolbox += '                    <field name="KEY">0</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="X">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">0</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="Y">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">0</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="actions_move_simple">';
toolbox += '            <value name="X">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">16</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="Y">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">16</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="actions_move">';
toolbox += '            <value name="X">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">16</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="Y">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">16</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="SPEEDX">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">0</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="SPEEDY">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">0</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="HORIZONTAL">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">0</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="VERTICAL">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">0</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="SPACEDOWN">';
toolbox += '                <shadow type="logic_boolean">';
toolbox += '                    <field name="BOOL">FALSE</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="actions_block">';
toolbox += '            <value name="X">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">0</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="Y">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">0</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="ID">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">0</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="actions_timeout"></block>';
toolbox += '        <block type="actions_interval"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Types" colour="95">';
toolbox += '        <block type="types_smiley"></block>';
toolbox += '        <block type="types_smiley_id">';
toolbox += '            <value name="ID">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">0</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="types_autotext"></block>';
toolbox += '        <block type="types_key"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Values" colour="0">';
toolbox += '        <block type="values_key_pressed"></block>';
toolbox += '        <block type="values_key"></block>';
toolbox += '        <block type="values_player_get"></block>';
toolbox += '        <block type="values_players"></block>';
toolbox += '        <block type="values_ownplayer"></block>';
toolbox += '        <block type="values_crownplayer"></block>';
toolbox += '        <block type="values_userid"></block>';
toolbox += '        <block type="values_username"></block>';
toolbox += '        <block type="values_message"></block>';
toolbox += '        <block type="values_smiley"></block>';
toolbox += '        <block type="values_goldcoins"></block>';
toolbox += '        <block type="values_bluecoins"></block>';
toolbox += '        <block type="values_x"></block>';
toolbox += '        <block type="values_y"></block>';
toolbox += '        <block type="values_speedx"></block>';
toolbox += '        <block type="values_speedy"></block>';
toolbox += '        <block type="values_horizontal"></block>';
toolbox += '        <block type="values_vertical"></block>';
toolbox += '        <block type="values_spacedown"></block>';
toolbox += '    </category>';
toolbox += '    <sep></sep>';
toolbox += '    <category name="Variables" colour="330" custom="VARIABLE"></category>';
toolbox += '    <category name="Functions" colour="290" custom="PROCEDURE"></category>';
toolbox += '</xml>';

initTutorial({
    title: 'The Sandbox',
    objective: 'In the sandbox you have access to every function without limitations.',
    hint: 'YouCanBot is limited and only designed to give you a taste of bot development. If you enjoy writing bots, read <a href="https://github.com/Yonom/youcanbot-tutorials/wiki/Getting-Stated-with-Serious-Programming">this guide</a> to get serious with programming.',
    isSandbox: true,
    toolbox: toolbox
});