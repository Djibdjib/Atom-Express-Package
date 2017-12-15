const {CompositeDisposable} = require('atom')

module.exports = {
    subscriptions: null,

    activate () {
        console.log("express activate");
        this.subscriptions = new CompositeDisposable()
        this.subscriptions.add(
            // atom.commands.add('atom-workspace', {'express-snippets:convert': () => this.convert()})
            atom.commands.add('atom-text-editor', {'express-snippets:convert': () => this.convert()})
        )

    },

    deactivate () {
        this.subscriptions.dispose()
    },

    convert() {
        atom.notifications.addSuccess("You'r corporate !")

        const editor = atom.workspace.getActiveTextEditor()
        if (editor) {
            // const selection = editor.getSelectedText()
            const selection = "Express by Novembre"

            const figlet = require('figlet')
            const font = 'o8'
            figlet(selection, function (error, art) {
                if (error) {
                    console.error(error)
                } else {
                    editor.insertText(`\n${art}\n`)
                }
            })
        }
        return this;
    }
}
