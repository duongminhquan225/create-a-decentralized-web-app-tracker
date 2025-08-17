interface BlockchainNode {
  nodeId: string;
  url: string;
  lastSeen: number;
}

interface TrackerData {
  webpageUrl: string;
  webpageTitle: string;
  visits: number;
  averageTimeSpent: number;
  referrer: string;
  userAgent: string;
  timestamp: number;
}

interface WebpageMetadata {
  url: string;
  title: string;
  description: string;
  keywords: string[];
  screenshot: string;
}

interface User {
  userId: string;
  username: string;
  publicKey: string;
  privateKey: string;
}

interface DecentralizedWebAppTracker {
  nodes: BlockchainNode[];
  webpageMetadata: WebpageMetadata[];
  trackerData: TrackerData[];
  users: User[];
}

class DecentralizedWebAppTrackerImpl implements DecentralizedWebAppTracker {
  nodes: BlockchainNode[] = [];
  webpageMetadata: WebpageMetadata[] = [];
  trackerData: TrackerData[] = [];
  users: User[] = [];

  constructor() {}

  async addNode(node: BlockchainNode) {
    this.nodes.push(node);
  }

  async addWebpageMetadata(metadata: WebpageMetadata) {
    this.webpageMetadata.push(metadata);
  }

  async addTrackerData(data: TrackerData) {
    this.trackerData.push(data);
  }

  async addUser(user: User) {
    this.users.push(user);
  }

  async getNode(nodeId: string): Promise<BlockchainNode | null> {
    return this.nodes.find((node) => node.nodeId === nodeId) || null;
  }

  async getWebpageMetadata(url: string): Promise<WebpageMetadata | null> {
    return this.webpageMetadata.find((metadata) => metadata.url === url) || null;
  }

  async getTrackerData(webpageUrl: string): Promise<TrackerData[] | null> {
    return this.trackerData.filter((data) => data.webpageUrl === webpageUrl) || null;
  }

  async getUser(userId: string): Promise<User | null> {
    return this.users.find((user) => user.userId === userId) || null;
  }
}