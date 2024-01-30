const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const uri = "mongodb+srv://admin:admin@cluster0.rrwtats.mongodb.net/?retryWrites=true&w=majority";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// MongoDB bağlantısı
mongoose.connect(uri, clientOptions)
  .then(() => {
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  })
  .catch(error => {
    console.error('MongoDB bağlantı hatası:', error);
  });

// Skill Modeli
const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
  },
});
const Skill = mongoose.model('Skill', skillSchema);

// Education Modeli
const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  dateRange: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { collection: 'education_experiences' });
const Education = mongoose.model('Education', educationSchema);
const projectSchema = new mongoose.Schema({
  imagepath: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
},{ collection: 'projects' });

const Project = mongoose.model('Project', projectSchema);
// API Endpoint
app.get('/api/skills', async (req, res) => {
  try {
    const result = await Skill.find();
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.json({ message: result.map(skill => ({
      name: skill.name,
      icon: skill.icon,
      percentage: skill.percentage,
    }))});
  } catch (error) {
    console.error('API Endpoint hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

app.get('/api/education_experiences', async (req, res) => {
  try {
    const result = await Education.find();
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.json({ message: result.map(education => ({
      title: education.title,
      subTitle: education.subTitle,
      dateRange: education.dateRange,
      description: education.description
    }))});
  } catch (error) {
    console.error('API Endpoint hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});
app.get('/api/projects', async (req, res) => {
  try {
    const result = await Project.find();
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    const formattedProjects = result.map(project => ({
      imagepath: project.imagepath,
      title: project.title,
      text: project.text,
      url: project.url
    }));

    res.json({ message: formattedProjects });
  } catch (error) {
    console.error('API Endpoint hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});


// Server'ı dinlemeyi en sonda başlat
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
});
