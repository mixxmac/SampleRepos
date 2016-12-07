// 環境変数の設定
process.env.DATABASE_URL = process.env.DATABASE_URL || 'mysql://user:password@localhost/local_db'

import * as index from '../src/index';
import * as mocha from 'mocha';
import {assert} from 'chai';

describe('it', () => {
    it('sample', () => {
        assert.equal(1, 1);
    });

    it('get team name', async () => {
        const sequelize = await index.init();

        const Team = sequelize.model<index.Team, index.TeamAttr>('team');

        var t = await Team.find({
            where: {id: 1}
        });
        assert.isNotNull(t);
        if(t == null){
            assert.fail();
            return ;
        }

        assert.equal(t.name, 'Reds');
    });

    it('get team count', async () => {
        const sequelize = await index.init();
       const Team = sequelize.model<index.Team, index.TeamAttr>('team');

        var teams = await Team.findAll();

        assert.equal(teams.length, 5);
    });
});

