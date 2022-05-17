

export async function get40List(req, res) {
    try {
    //   const playlists = await Playlists.find().lean().exec();
      res.status(200).send({
        data: {"hiiii":"aaaa"},
      });
    } catch (error) {
      next(error);
    }
  }
