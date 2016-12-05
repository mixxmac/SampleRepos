import * as index from './index';
import * as mocha from 'mocha';
import {assert} from 'chai';

describe('it', () => {
    it('add', () => {
        assert.equal(1, 1);

    });

    it('db test', async () => {
        const sequelize = await index.init();

        const Team = sequelize.model<index.Team, index.TeamAttr>('team');

        var t = await Team.find({
            where: {id: 1}
        });
        assert.isNotNull(t);
        t = <index.Team>t;

        assert.equal(t.name, 'Reds');
    });

    
});

