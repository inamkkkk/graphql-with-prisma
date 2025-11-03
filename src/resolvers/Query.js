const Query = {
  posts: async (parent, args, context) => {
    return context.prisma.post.findMany();
  },
  post: async (parent, args, context) => {
    return context.prisma.post.findUnique({
      where: {
        id: parseInt(args.id),
      },
    });
  },
  createPost: async (parent, args, context) => {
    return context.prisma.post.create({
      data: {
        title: args.title,
        content: args.content,
      },
    });
  },
  updatePost: async (parent, args, context) => {
    return context.prisma.post.update({
      where: {
        id: parseInt(args.id),
      },
      data: {
        title: args.title,
        content: args.content,
      },
    });
  },
  deletePost: async (parent, args, context) => {
    return context.prisma.post.delete({
      where: {
        id: parseInt(args.id),
      },
    });
  },
};

module.exports = Query;