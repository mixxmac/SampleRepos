"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
require('source-map-support/register');
const Sequelize = require('sequelize');
const DB_URL = process.env.DATABASE_URL || `mysql://ubuntu@localhost/circle_test`;
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        // mysql.server start
        const sequelize = new Sequelize(DB_URL, {
            define: {
                freezeTableName: true,
                timestamps: false,
                underscoredAll: true,
                benchmark: true,
            }
        });
        //const sequelize = new Sequelize('ext_sequelize', 'root', <any>null, { host: 'localhost', port: 3306 }, );
        const User = sequelize.define('userdata', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            userName: {
                type: Sequelize.STRING,
            },
            birthday: Sequelize.DATE,
            age: Sequelize.INTEGER(4),
        });
        const Team = sequelize.define('team', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
            },
            owner: {
                type: Sequelize.INTEGER
            }
        });
        yield sequelize.sync({
            force: true
        });
        console.log(Team);
        console.log(User);
        const res = yield User.create({
            id: 5,
            username: 'bob',
            age: 123,
        });
        const teams = yield Team.bulkCreate([
            {
                name: 'Reds',
                owner: 1
            }, {
                name: 'Blues',
                owner: 2
            }, {
                name: 'Greens',
                owner: 3
            }, {
                name: 'Brown',
                owner: 4
            }, {
                name: 'Black',
                owner: 5
            }
        ]);
        console.log("Fin!!!");
        return sequelize;
    });
}
exports.init = init;
//# sourceMappingURL=index.js.map