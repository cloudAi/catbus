exports.rule = {
    author: "远尘 <codedancerhua@gmail.com>",
    id: "js-object-comma",
    description: "对象多了逗号",
    level: "error",
    validator: function(reporter, rawStr) {
        var reObj = /\{([\s\n\r'""]*\w+['"]?\s*\:[\s'"\w]*\,[\s\n\r]*)+\}/g
        var obj

        while (obj = reObj.exec(rawStr)) {
            reporter[this.level](this.description, getLineNo(rawStr, obj.index), null, this, obj)
        }

        function getLineNo(str, start) {
            var reLine = /\r?\n/g
            var line = 1
            var br

            while (br = reLine.exec(str)) {
                if (br.index < start) {
                    line++
                }
            }

            return line
        }

    }    
}