export const REPOSITORIES = {
  culturalEvents: 'repository.culturalEvents'
};

export interface Repository<TEntity> {
  list: () => Promise<Array<TEntity>>
}