// 環境変数の設定
process.env.DATABASE_URL = 'mysql://user:password@localhost/local_db'

import * as index from './index';
index.init();

