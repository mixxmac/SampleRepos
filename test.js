"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const index = require('./index');
const chai_1 = require('chai');
describe('it', () => {
    it('add', () => {
        chai_1.assert.equal(1, 1);
    });
    it('db test', () => __awaiter(this, void 0, void 0, function* () {
        const sequelize = yield index.init();
        const Team = sequelize.model('team');
        var t = yield Team.find({
            where: { id: 1 }
        });
        chai_1.assert.isNotNull(t);
        t = t;
        chai_1.assert.equal(t.name, 'Reds');
    }));
});
//# sourceMappingURL=test.js.map