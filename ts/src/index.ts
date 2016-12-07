import 'source-map-support/register';

import * as Sequelize from 'sequelize';


/**
 * DB接続設定
 */
const DATABASE_URL = <string>process.env.DATABASE_URL;

export async function init() {

    // mysql.server start
    const sequelize = new Sequelize(DATABASE_URL, {
        define: {
            freezeTableName: true,
            timestamps: false,
            underscoredAll: true,
            benchmark: true,
        }
    });
    //const sequelize = new Sequelize('ext_sequelize', 'root', <any>null, { host: 'localhost', port: 3306 }, );

    const User = sequelize.define<User, UserAttr>('userdata', {
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

    const Team = sequelize.define<Team, TeamAttr>('team', {
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

    await sequelize.sync({
        force: true
    });

    const res = await User.create({
        id: 5,
        username: 'bob',
        age: 123,
    });
    const teams = await Team.bulkCreate([
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

    console.log("Fin!");

    return sequelize;
}


export interface UserAttr {
    id?: number;
    username: string;
    age?: number
}

export interface User {
    id: number;
    username: string;
    birthday: string;
    age: number;
}

export interface TeamAttr {
    id?: number;
    name: string;
    owner: number;
}

export interface Team {
    id: number;
    name: string;
    owner: User;
}

