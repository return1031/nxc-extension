import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('NXCLang extension activated!');

    // コード補完プロバイダ
    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(
            'nxc',
            {
                provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                    const completionItems = [
                        // コマンド
                        new vscode.CompletionItem('Press', vscode.CompletionItemKind.Function),
                        new vscode.CompletionItem('Hold', vscode.CompletionItemKind.Function),
                        new vscode.CompletionItem('Wait', vscode.CompletionItemKind.Function),
                        new vscode.CompletionItem('Loop', vscode.CompletionItemKind.Keyword),
                        // ボタン
                        new vscode.CompletionItem('A', vscode.CompletionItemKind.Value),
                        new vscode.CompletionItem('B', vscode.CompletionItemKind.Value),
                        new vscode.CompletionItem('UP_L', vscode.CompletionItemKind.Value),
                        // LS/RS
                        new vscode.CompletionItem('LS', vscode.CompletionItemKind.Function),
                        new vscode.CompletionItem('RS', vscode.CompletionItemKind.Function)
                    ];
                    return completionItems;
                }
            },
            '' // 任意のタイミングで補完
        )
    );

    // ホバープロバイダ
    context.subscriptions.push(
        vscode.languages.registerHoverProvider('nxc', {
            provideHover(document, position) {
                const wordRange = document.getWordRangeAtPosition(position);
                const word = wordRange ? document.getText(wordRange) : '';
                const commandDocs: { [key: string]: string } = {
                    Press: '指定された時間ボタン押下を行う\n\n`Press([Button1, Button2, ...], [PressTime], [WaitTime])`',
                    Hold: '指定されたボタンを押す\n\n`Hold([Button1, Button2, ...])`',
                    Wait: '指定時間待機を行う\n\n`Wait([WaitTime])`',
                    Loop: '続くブロック内の処理を指定回数分実行する\n\n`Loop([Counter])`'
                    // 他のコマンドも同様に追加
                };
                if (commandDocs[word]) {
                    return new vscode.Hover(commandDocs[word]);
                }
                return null;
            }
        })
    );
}

export function deactivate() { }