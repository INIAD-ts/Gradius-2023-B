import type { UserId } from '$/commonTypesWithClient/branded';
import type { BulletModel } from '$/commonTypesWithClient/models';
import { bulletsRepository } from '$/repository/bulletsRepository';
import { gamesRepository } from '$/repository/gamesRepository';
import { bulletIdParser } from '$/service/idParsers';
import { posWithDirSpeTim as posWithBulletModel } from '$/service/posWithDirSpeTim';
import { randomUUID } from 'crypto';
import { enemyUseCase } from './enemyUseCase';
import { playerUseCase } from './playerUseCase';

export const bulletUseCase = {
  create: async (playerId: UserId): Promise<BulletModel | null> => {
    const player = await playerUseCase.getStatus(playerId, null);
    if (player !== null) {
      const newBullet: BulletModel = {
        id: bulletIdParser.parse(randomUUID()),
        createdPosition: {
          ...player.position,
        },
        direction: 0,
        type: 0,
        playerId,
        createdAt: Date.now(),
      };
      await bulletsRepository.create(newBullet);
      return newBullet;
    }
    return null;
  },
  createByEnemy: async (pos: { x: number; y: number }, dir = 0) => {
    const newBullet: BulletModel = {
      id: bulletIdParser.parse(randomUUID()),
      createdPosition: {
        ...pos,
      },
      direction: dir,
      type: 0,
      playerId: undefined,
      createdAt: Date.now(),
    };
    await bulletsRepository.create(newBullet);
  },
  delete: async () => {
    const bullets = [
      ...(await bulletsRepository.findAllOfPlayers()),
      ...(await bulletsRepository.findAllOfEnemies()),
    ];
    const game = await gamesRepository.find();
    const maxXPosition = ((game?.displayNumber ?? -1) + 1) * 1920;
    const deleteBullets = bullets.filter((bullet) => {
      const [x, y] = posWithBulletModel(bullet);
      return x < 0 || maxXPosition < x || y < 0 || 1080 < y;
    });
    deleteBullets.forEach((bullet) => {
      bulletsRepository.delete(bullet.id);
    });
  },
  getStatus: async () => {
    bulletUseCase.delete();
    enemyUseCase.respawn();
    const res1 = await bulletsRepository.findAllOfPlayers();
    const res2 = await bulletsRepository.findAllOfEnemies();
    return {
      playerS: res1 ?? [],
      enemyS: res2 ?? [],
    };
  },
};
