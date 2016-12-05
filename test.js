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
    it('sample', () => {
        chai_1.assert.equal(1, 1);
    });
    it('get team name', () => __awaiter(this, void 0, void 0, function* () {
        const sequelize = yield index.init();
        const Team = sequelize.model('team');
        var t = yield Team.find({
            where: { id: 1 }
        });
        chai_1.assert.isNotNull(t);
        if (t == null) {
            chai_1.assert.fail();
            return;
        }
        chai_1.assert.equal(t.name, 'Reds');
    }));
    it('get team count', () => __awaiter(this, void 0, void 0, function* () {
        const sequelize = yield index.init();
        const Team = sequelize.model('team');
        var teams = yield Team.findAll();
        chai_1.assert.equal(teams.length, 4);
    }));
});
//# sourceMappingURL=test.js.map